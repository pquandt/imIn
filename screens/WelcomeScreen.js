// import { StatusBar } from "expo-status-bar";
import React from "react";


import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,

  TouchableOpacity,
} from "react-native";




export default function WelcomeScreen() {


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={styles.logoSize}
          source={require("../assets/pics/drawable-xhdpi/logo.png")}
        />
      </View>

      <View>
      <Text style={styles.boldText}>Willkomen</Text>
      <Text>
        verlasse deine Komfortzone und werde Teil der I'm in! Community!
      </Text>
</View>

<View style={{justifyContent:"center"}}>
      <TouchableOpacity style={styles.buttonYellow}>
      <View><Text style={styles.buttonText}>Mit Google registrieren</Text></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonWhite}>
      <View><Text style={styles.buttonText}>Mit Email registrieren</Text></View>
      </TouchableOpacity>
</View>
    

      <Text>Bist du schon angemeldet?</Text>
      <Text style={{color:"#f3008a"}}>Hier anmelden</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 54,
    // fontFamily: "Montserrat",
  },

  boldText: {
    // fontFamily: "Montserrat",
    fontSize: 28,

    paddingLeft: 30,
    paddingRight: 30,
  },

  buttonYellow: {
      width: 300,
      height: 50,
    borderRadius:25,
 justifyContent:"center",
 alignItems:"center",
    backgroundColor: 'yellow',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },

  buttonWhite: {
    width: 300,
    height: 50,
  borderRadius:25,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor: 'white',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOpacity: 0.8,
  elevation: 6,
  shadowRadius: 15 ,
  shadowOffset : { width: 1, height: 13},
},

  buttonText: {
    // fontFamily: "Montserrat",
    color: "#000",
  },

  logoSize: {
    resizeMode: "contain",
    width: 250,
    height: 160,
  },
});
