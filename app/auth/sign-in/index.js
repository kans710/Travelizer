import { View, Text, StatusBar,SafeAreaView, TextInput, StyleSheet,TouchableOpacity,ToastAndroid} from 'react-native'
import React, { useEffect,useState,useRef } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  { signInWithEmailAndPassword,getAuth} from '@firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'

export default function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  const navigation = useNavigation();
  const passwordRef = React.useRef(null);

  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])
  const OnSignIn=()=>{
    const auth = getAuth();
    if(!email&&!password){
          ToastAndroid.show('Please enter the details first',ToastAndroid.BOTTOM)
        }
    if(!email&&password){
      ToastAndroid.show('Please enter an email',ToastAndroid.BOTTOM)
    }
    if(email&&!password){
      ToastAndroid.show('Please enter a password',ToastAndroid.BOTTOM)
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);
        if (errorCode === 'auth/invalid-email' || errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
          ToastAndroid.show('Invalid credentials', ToastAndroid.BOTTOM);
        } else {
          // Handle other potential errors
          ToastAndroid.show(`Sign-in error: ${errorMessage}`, ToastAndroid.BOTTOM);
        }
      });
    
  }
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
         placeholder='Enter Email'
         onChangeText={(value) => setEmail(value)}
          ></TextInput>
         
      </View>
      <View style={{marginTop:10}}>
        <Text style={{
          color:'#fff',
          fontSize:20
        }}>
          Password
        </Text>
        

    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#7d7d7d',
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: '#e9ecef',
        marginTop: 10
    }}>
        <TextInput
            ref={passwordRef} // Attach ref
            style={{ flex: 1, fontSize: 20, paddingVertical: 15 }}
            placeholder="Enter Password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={!passwordVisible} // Toggle visibility
        />
        <TouchableOpacity 
            onPress={() => {
                setPasswordVisible(!passwordVisible);
                passwordRef.current?.focus(); // Keep focus on TextInput
            }}
        >
            <Icon name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="#7d7d7d" />
        </TouchableOpacity>
    </View>


      </View>
      <Text style={{
        color:'#91cb3e',
        fontFamily:'Poppins',
        fontSize:20,
        marginTop:15,
        marginLeft:10
      }}>Forget your password?</Text>
      <TouchableOpacity style = {styles.button}
            onPress={OnSignIn}
        >
            <Text style={{color:Colors.white,
                textAlign:'center',
                fontFamily:'Poppins',
                fontSize:17,
                }}>SignIn</Text>
        </TouchableOpacity>
      <TouchableOpacity style = {[styles.button,{marginTop:'5%',backgroundColor:"#000",alignContent:'flex-start'}]}
            onPress={()=>router.push('auth/sign-up')}
        >
            <Text style={{color:"#fff",
                textAlign:'center',
                fontFamily:'Poppins',
                fontSize:17,
                }}>Don't have an account yet?{'\n'}Let's make one!</Text>
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
    backgroundColor:"#91cb3e",
    borderRadius:99,
    //width:'75%',
    //marginLeft:'13%',
    alignContent:'center',
    marginTop:'50%'
}
})