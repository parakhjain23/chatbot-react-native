
import ChatBot from 'chatbot-react-native-sdk';
import React from 'react';
import { Button, DeviceEventEmitter, Text, View } from 'react-native';

function Home() {
  const [threadId, setThreadId] = React.useState('12345');
  const changeThreadId = () => {
    DeviceEventEmitter.emit('openChatbot', { type: 'openChatbot' });
    // const randomThreadId = Math.random().toString(36).substring(2, 10);
    // setThreadId(randomThreadId);
  }
  return (
    <View style={{ flex: 1 }}>
      {/* <Button title="Change Thread ID" onPress={changeThreadId} /> */}
      <View style={{ width: 200, height: 600, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', position: 'static'}}>
        <ChatBot threadId={threadId} bridgeName='demo' embedToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdfaWQiOiIxMjg5IiwiY2hhdGJvdF9pZCI6IjY2NTk2YWU3ZjA0NGRlNzMzZTNlYzdlYiIsInVzZXJfaWQiOiIxMjM0In0.WPAYYTuTFoXaLJLrA_SR14eym4lxjtiJpamyk2GBOTE" openInContainer={false} />
      </View>

    </View>
  )
}

export default Home