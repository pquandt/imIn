import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput } from 'react-native';
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";



export default function Anmeldung() {

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
      });
    
      if (!fontsLoaded) {
        return null
      }
  
 

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          margin: 55,
        }}
      >
        <Image
          style={styles.logoSize}
          source={require("../assets/pics/drawable-xhdpi/logo.png")}
        />
      </View>

      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text style={styles.boldText}>Anmeldung</Text>
        <Text style={{ fontFamily: "Montserrat_400Regular" }}>
          Melde dich mit deiner E-Mail {"\n"}und deinem Passwort an.
        </Text>
      </View>

       

      <View style={{ alignItems: "flex-end", flex:5}}>
        <Text style={{ color: "#f3008a", fontFamily: "Montserrat_400Regular" }}>
          Passwort vergessen?{" "}
        </Text>
      </View>


      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 3,
          paddingBottom: "10%",
        }}
      >
        <TouchableOpacity style={styles.buttonYellow}>
          <Text style={styles.buttonText}>Anmelden</Text>
        </TouchableOpacity>
      </View>

      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 54,
    paddingHorizontal: 30,
    fontFamily: "Montserrat_400Regular",
  },

  boldText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 28,
    marginBottom: 20,
  },

  buttonYellow: {
    width: "100%",
    height: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },

  buttonWhite: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },

  buttonText: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

 
  logoSize: {
    resizeMode: "contain",
    width: 250,
    height: 160,
  },
});
