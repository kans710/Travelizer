import { View, Text , TextInput, StyleSheet,TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation , useRouter} from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import  { createUserWithEmailAndPassword} from '@firebase/auth'
// import { auth } from '../../../configs/FirebaseConfig.js'
import {auth} from '../../../configs/FirebaseConfig'
export default function SignUp() {
  const navigation = useNavigation();
  const router=useRouter();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [username,setUsername] = useState();


  useEffect(()=>{
    navigation.setOptions({headerShown:false})
  },[])

  const OnCreateAccount=()=>{
    if(!email&&!password&&!username){
      ToastAndroid.show('Please enter the details first',ToastAndroid.BOTTOM)
    }
    if(!email&&password&&username){
      ToastAndroid.show('Please enter an email',ToastAndroid.BOTTOM)
    }
    if(email&&password&&!username){
      ToastAndroid.show('Please enter a username',ToastAndroid.BOTTOM)
    }
    if(email&&!password&&username){
      ToastAndroid.show('Please enter a password',ToastAndroid.BOTTOM)
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace('/mytrip')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
  });
  }
  return (
    <View
    style={{
      padding:25,
      paddingTop:50,
      backgroundColor:'#000',
      height:'100%'
    }}
    >
      <Text style={{
        paddingLeft:'6%',
        fontSize:30,   
        fontFamily:'Poppins-Bold',
        marginTop:30,
        color:Colors.white
      }}
      >Create New Account </Text>
      <Text style={{
        paddingLeft:'6%',
        fontSize:30,   
        fontFamily:'Poppins-Bold',
        marginTop:30,
        color:'#adb5bd'
      }}
      >Welcome to the world of Travelizer. </Text>
      <View style={{marginTop:'15%'}}>
              <Text style={{
                color:'#fff',
                fontSize:20
              }}>
                Username
              </Text>
              <TextInput
              style={styles.input}
               placeholder='Your Name'
               onChangeText={(value)=>{setUsername(value)}}
                ></TextInput>
            </View>
      <View style={{marginTop:10}}>
              <Text style={{
                color:'#fff',
                fontSize:20
              }}>
                Email
              </Text>
              <TextInput
              style={styles.input}
               placeholder='Enter Email'
               onChangeText={(value)=>{setEmail(value)}}
                ></TextInput>
            </View>
      <View style={{marginTop:10}}>
              <Text style={{
                color:'#fff',
                fontSize:20
              }}>
                Password
              </Text>
              <TextInput
              style={styles.input}
               placeholder='Enter Password'
               onChangeText={(value)=>{setPassword(value)}}
                ></TextInput>
            </View>
            <TouchableOpacity style = {styles.button}
                        onPress={OnCreateAccount}
                    >
                        <Text style={{color:Colors.white,
                            textAlign:'center',
                            fontFamily:'Poppins',
                            fontSize:17,
                            }}>Create Account</Text>
                    </TouchableOpacity>
    </View>
      
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
    backgroundColor:"#91cb3e",
    borderRadius:99,
    //width:'75%',
    //marginLeft:'13%',
    alignContent:'center',
    marginTop:'13%'
}
})