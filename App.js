// import { StatusBar } from 'expo-status-bar';
import React from 'react';

// import WelcomeScreen from "./screens/WelcomeScreen"
import Anmeldung from "./screens/Anmeldung"
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    // <WelcomeScreen />
    <Anmeldung />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
