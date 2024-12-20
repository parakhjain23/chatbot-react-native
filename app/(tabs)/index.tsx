
import ChatBot from 'chatbot-react-native-sdk';
import React, { useEffect } from 'react';
import { Button, DeviceEventEmitter, View } from 'react-native';

function Home() {
  const [threadId, setThreadId] = React.useState(null);
  const [embedToken, setEmbedToken] = React.useState(null);
  const [bridgeName, setBridgeName] = React.useState("Assistantt");

  useEffect(() => {
    setTimeout(() => {
      setEmbedToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdfaWQiOiIxMTYyMSIsImNoYXRib3RfaWQiOiI2NzQ4MWJhMGM5NjFhNDQ5ZDczZDAxNmYiLCJ1c2VyX2lkIjoiMjMifQ.5-nzxW9GmHeItiCS445udYiaJzWGNIEZM2HpyVy-Cs4");
      setThreadId("12345");
    }, 2000);
    setTimeout(() => {
      setBridgeName('Assistant');
    }, 10000);
  }, [])

  const changeThreadId = () => {
    // DeviceEventEmitter.emit('openChatbot', { type: 'openChatbot' });
    // const randomThreadId = Math.random().toString(36).substring(2, 10);
    // setThreadId(randomThreadId);
    DeviceEventEmitter.emit('openChatbot', { type: 'openChatbot' });
    // const randomThreadId = Math.random().toString(36).substring(2, 10);
    // setThreadId(randomThreadId);
  }

  return (
    <View style={{ flex: 1 }}>
      <Button title="Change Thread ID" onPress={changeThreadId} />
      <View style={{ width: 200, height: 600, justifyContent: 'center', alignItems: 'center', position: 'static' }}>
      </View>
      <ChatBot threadId={threadId} bridgeName={bridgeName} embedToken={embedToken} />
    </View>
  )
}

export default Home

