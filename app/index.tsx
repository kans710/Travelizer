  // import { Text, View } from "react-native";
  // import { useFonts } from "expo-font";
  // import Login from "../components/login";
  // import{ auth } from "../configs/FirebaseConfig";
  // import { Redirect } from "expo-router";

  // export default function Index() {
  //   useFonts({
  //     'Poppins':require('../assets/fonts/Poppins-Medium.ttf'),
  //     'Poppins-Bold':require('../assets/fonts/Poppins-Bold.ttf'),
  //     'Poppins-light':require('../assets/fonts/Poppins-Light.ttf')
  //   })
  //   const user = auth.currentUser;
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
          
  //       }}
  //     >
  //       {user?
  //         <Redirect href={"/mytrip"}/>:
  //         <Login/>
  //       }
      
  //     </View>
  //   );
  // }
  import { Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import Login from "../components/login";
import { auth } from "../configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-light': require('../assets/fonts/Poppins-Light.ttf')
  });

  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  if (!fontsLoaded || user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#91cb3e" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={"/mytrip"} /> : <Login />}
    </View>
  );
}

