import Chatbot from '@/components/Chatbot'
import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

function Home() {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);
  return (
    <>
      <View style={{ position: 'absolute', bottom: 40, right: 20 }}>
        <Button title='Chatbot' onPress={() => setIsWebViewVisible(!isWebViewVisible)} />
      </View>
      <Chatbot isWebViewVisible={isWebViewVisible} setIsWebViewVisible={setIsWebViewVisible}/>
    </>
  )
}

export default Home