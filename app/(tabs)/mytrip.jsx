import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import StartNewTrip from '../../components/MyTrip/StartNewTrip';

export default function Mytrip() {
  const [UserTrips,setUserTrips] = useState([]);
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: '#000',
      padding:25,
      paddingTop:10 
      }}>
      <View style = {{
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
      }}
      >
        <StatusBar backgroundColor="#000" barStyle="light-content" />      
        <Text style = {{
          fontFamily:'Poppins-Bold',
          fontSize:30,
         color:'#fff'
       }}
        >My Trips</Text>
       <AntDesign name="pluscircleo" size={30} color="#fff" />
      </View>
      {UserTrips?.length == 0?
        <StartNewTrip/>
        :null
      }
    </View>
  )
}