import React, { useEffect, useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
const { height, width } = Dimensions.get('screen');

interface ChatbotProps {
  embedToken: string;
  bridgeName: string;
  threadId: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ embedToken, bridgeName, threadId }) => {
  const [chatbotProps, setChatProps] = useState({
    embedToken: embedToken || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdfaWQiOiIxMjc3IiwiY2hhdGJvdF9pZCI6IjY2NTA2MjhhZDQ4ZTIwZTYxY2Y3MDFhMCIsInVzZXJfaWQiOiJwYXJha2gifQ.DVG23clKOXfIx91S5UU-50LDFLiC5jcIV0r15SVo2Yk",
    bridgeName: bridgeName || "plugin",
    threadId: threadId || "23"
  });

  useEffect(() => {
    // Update the chatbotProps state with the new value and new value is not coming from the props take old value
    setChatProps((prevProps) => ({
      embedToken: embedToken || prevProps.embedToken,
      bridgeName: bridgeName || prevProps.bridgeName,
      threadId: threadId || prevProps.threadId
    }));
  }, [embedToken, bridgeName, threadId])

  // Create the HTML string with the chatbot script
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Chatbot</title>
    </head>
    <body>
      <script
        id="chatbot-main-script"
        embedToken="${chatbotProps.embedToken}"
        bridgeName="${chatbotProps.bridgeName}"
        threadId="${chatbotProps.threadId}"
        src="https://chatbot-embed.viasocket.com/chatbot-prod.js"
      ></script>
    </body>
    </html>
  `;

  const hasNotch = StatusBar.currentHeight > 24
  const isChatOn = true;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{
          width: isChatOn ? width : 0,
          height: isChatOn ? Platform.OS == 'android' ? '100%' : hasNotch ? height - StatusBar.currentHeight : height - StatusBar.currentHeight * 3 : 0,
        }}
      >
        <View style={{ flex: 1, marginTop: Platform.OS == 'ios' ? 30 : 0 }} >
          <WebView
            originWhitelist={['*']}  // Allow all URLs
            source={{ html: htmlContent }}  // Pass the HTML content
            style={styles.webview}  // Apply some basic styles
            containerStyle={{ flex: 1 }}
            scalesPageToFit={false}
            cacheMode='LOAD_CACHE_ELSE_NETWORK'
            contentMode='mobile'
            javaScriptEnabled
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,  // Make sure the WebView takes up the full screen
  },
});

export default Chatbot;
