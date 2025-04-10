import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native';
export default function Mytrip() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />      
      <Text>Lun</Text>
    </View>
  )
}