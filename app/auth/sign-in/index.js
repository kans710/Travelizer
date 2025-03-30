import { View, Text, StatusBar,SafeAreaView, TextInput, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function SignIn() {
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])
  return (
    <SafeAreaView style = {{padding : 25,
      // marginTop:45,
      backgroundColor:'#000',
      height:'100%',
    }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
      <Text style={{
        fontSize:30,
        marginTop:45,
        fontFamily:'Poppins-Bold',
        color:'#fff'
      }}>Let's Sign You In</Text>
      <Text style={{
        fontSize:30,
        fontFamily:'Poppins',
        color:'#7d7d7d',
        marginTop:20
      }}>Welcome Back</Text>
      <Text style={{
        fontSize:30,
        fontFamily:'Poppins',
        color:'#7d7d7d',
      }}>You've been missed</Text>
      <View style={{marginTop:50}}>
        <Text style={{
          color:'#fff',
          fontSize:20
        }}>
          Email
        </Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Email' ></TextInput>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input:{
    fontSize:20,
    padding:15,
    borderWidth:1,
    borderColor:'#7d7d7d',
    borderRadius:15,
    marginTop:15,
    height:60,
    backgroundColor:'#e9ecef'
  }
})