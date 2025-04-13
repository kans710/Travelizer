import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function TabLayout(){
  return (
    <Tabs
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#000',
      borderTopColor: '#222', // optional subtle border
    },
    tabBarActiveTintColor: '#91cb3e',
    tabBarInactiveTintColor: '#888',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
  }}
>
        <Tabs.Screen
        name="mytrip"  // Just use a simple name
        options={{
          headerShown: false,
          tabBarLabel:'My Trip',
          title: 'My Trip',
          tabBarActiveTintColor:'#91cb3e',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="location-dot" size={24} color={color} />
          ),
        }}
/>
        <Tabs.Screen name = "discover"
        options={{
          headerShown: false,
          tabBarLabel:'Discover',
          title: 'Discover',
          tabBarActiveTintColor:'#91cb3e',
          tabBarIcon: ({ color }) => (
            <Entypo name="compass" size={24} color={color} />
          ),
        }}
        />
        <Tabs.Screen name = "profile"
        options={{
          headerShown: false,
          tabBarLabel:'Profile',
          title: 'Profile',
          tabBarActiveTintColor:'#91cb3e',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
        />
    </Tabs>
  )
}