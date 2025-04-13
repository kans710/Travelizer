
import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, FlatList, ActivityIndicator, Animated } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';

export default function SearchPlace() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const API_KEY = 'pk.97bdc24cfd21d82c5071a51de244c936';

  const searchPlaces = async (query) => {
    if (!query) return;

    setLoading(true);
    setShowSuggestions(true);

    try {
      const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${query}&format=json`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching places:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowSuggestions(false));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000', position: 'relative' }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      {/* Top bar */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 10,
        backgroundColor: '#000',
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      }}>
        <TouchableOpacity onPress={() => router.push('/mytrip')}>
          <AntDesign name="arrowleft" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Poppins-Bold',
          paddingLeft: 10,
          fontSize: 22,
          color: '#fff',
        }}>
          Search
        </Text>
      </View>

      {/* Search input */}
      <View style={{ padding: 20 }}>
        <TextInput
          style={{
            height: 50,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 25,
            paddingLeft: 20,
            color: '#fff',
            fontSize: 16,
            backgroundColor: '#333',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}
          placeholder="Search for places"
          placeholderTextColor="#aaa"
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            searchPlaces(text);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>

      {/* Loading */}
      {loading && (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {/* Suggestions */}
      {showSuggestions && !loading && (
        <Animated.View style={{
          opacity: fadeAnim,
          marginTop: 10,
          paddingHorizontal: 20,
          backgroundColor: 'rgba(43, 42, 42, 0.6)',
          borderRadius: 10,
          maxHeight: 250,
          zIndex: 9999,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          width: '90%',
          alignSelf: 'center',
          paddingBottom: 20,
            
        }}>
          <FlatList
            data={results}
            keyExtractor={(item) => item.place_id.toString()}
            renderItem={({ item }) => (
              
              <TouchableOpacity style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#444',
                
              }} onPress={() => { 
                console.log('pressed');
                router.push('/create-trip/select-traveler');
              }}>
                <Text style={{ color: '#fff', fontSize: 16 }}>{item.display_name}</Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      )}

      {/* No results */}
      {!loading && results.length === 0 && query !== '' && (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>No results found</Text>
        </View>
      )}

      {/* Lottie Animation - Fixed position below suggestion box */}
      <LottieView
        source={require('../../assets/animations/plane2.json')}
        autoPlay
        loop
        style={{
          position: 'absolute',
          // color:'#91cb3e',
          top: '60%', // 250 maxHeight + 150 offset
          width: 300,
          height: 300,
          alignSelf: 'center',
          pointerEvents:'none'
        }}
      />
    </View>
  );
}
