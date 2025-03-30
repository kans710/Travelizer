import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import Login from "../components/login";

export default function Index() {
  useFonts({
    'Poppins':require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold':require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-light':require('../assets/fonts/Poppins-Light.ttf')
  })
  return (
    <View
      style={{
        flex: 1,
        
      }}
    >
     <Login/>
    </View>
  );
}
