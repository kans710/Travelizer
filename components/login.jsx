import { View, Text, Image,StyleSheet,StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/app-example/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
    const router = useRouter();
  return (
    
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={require('../assets/images/llogin.jpg')}
        style={{
            width:'100%',
            height:525,
            // borderRadius:2,
            // borderColor:'#000000',
            // borderWidth:1,
            // resizeMode: "cover",

        }}
      ></Image>
      <View style={styles.container}>
        <Text style={{
            fontSize:28,
            fontFamily:'Poppins-Bold',
            textAlign:'center',
            marginTop:10

        }}>Travelizer</Text>
        <Text style={{
            fontFamily:'Poppins',
            textAlign:'center',
            fontSize:17,
            color:'#7d7d7d',
            marginTop:20,

        }}>"Discover your next adventure effortlessly.Personalised itenaries at your fingertips. Travel smarter with Travelizer."</Text>
        <TouchableOpacity style = {styles.button}
            onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{color:Colors.white,
                textAlign:'center',
                fontFamily:'Poppins',
                fontSize:17,
                }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginTop:-20,
        height:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:25
    },
    button:{
        padding:15,
        backgroundColor:Colors.primary,
        borderRadius:99,
        marginTop:'19%'
    }
    
})