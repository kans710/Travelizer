import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

export default function StartNewTrip() {
  const router = useRouter();
  return (
    <View
    style = {{
        padding:25,
        paddingTop:50,
        display:'flex',
        alignItems:'center',
        gap:25
        
    }}>
      
        <Entypo name="location" size={40} color="#fff"  />
        <Text style = {{
                  fontFamily:'Poppins-Bold',
                  fontSize:30,
                 color:'#fff'
               }}
                >No Trips Planned</Text>      
        <Text style = {{
                  fontFamily:'Poppins',
                  textAlign:'center',
                  fontSize:20,
                 color:'#adb5bd',
                 
               }}
                >Looks like its time to plan a new travel experience! Get started below
        </Text>    
        <TouchableOpacity
        onPress={()=>router.push('/create-trip/search-place')}
         style = {{
            padding:15,
            backgroundColor:"#91cb3e",
            borderRadius:99,
            alignContent:'center',
            width:'200'
            
            }}                           
            >
            <Text style={{color:'#fff',
                textAlign:'center',
                fontFamily:'Poppins',
                fontSize:18,
                }}>Start a new Trip</Text>
        </TouchableOpacity>  
    </View>
  )
}
