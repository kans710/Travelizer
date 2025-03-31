import { View, Text, StatusBar,SafeAreaView, TextInput, StyleSheet,TouchableOpacity} from 'react-native'
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
        marginTop:10
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
      <View style={{marginTop:10}}>
        <Text style={{
          color:'#fff',
          fontSize:20
        }}>
          Password
        </Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder='Enter Password' ></TextInput>

      </View>
      <Text style={{
        color:'#0096c7',
        fontFamily:'Poppins',
        fontSize:20,
        marginTop:15,
        marginLeft:10
      }}>Forget your password?</Text>
      <TouchableOpacity style = {styles.button}
            onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{color:Colors.white,
                textAlign:'center',
                fontFamily:'Poppins',
                fontSize:17,
                }}>SignIn</Text>
        </TouchableOpacity>
      <TouchableOpacity style = {[styles.button,{marginTop:'5%',backgroundColor:"#000",alignContent:'flex-start'}]}
            onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{color:"#fff",
                textAlign:'center',
                fontFamily:'Poppins',
                fontSize:17,
                }}>Don't have an account yet?                   lets make one !</Text>
        </TouchableOpacity>
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
  },
  button:{
    padding:15,
    backgroundColor:"#52b69a",
    borderRadius:99,
    //width:'75%',
    //marginLeft:'13%',
    alignContent:'center',
    marginTop:'50%'
}
})