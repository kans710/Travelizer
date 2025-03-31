import { View, Text , TextInput, StyleSheet,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation , useRouter} from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function SignUp() {
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({headerShown:false})
  },[])
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
                Full Name
              </Text>
              <TextInput
              style={styles.input}
               placeholder='Your Name' ></TextInput>
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
              style={styles.input}
               placeholder='Enter Password' ></TextInput>
            </View>
            <TouchableOpacity style = {styles.button}
                        onPress={()=>router.push('auth/sign-up')}
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