import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import image1 from "./assets/welcome1.png"
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.skip}>
          <Text>Skip</Text>
        </Pressable>
      <Image source={image1} style={styles.picture1}/>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.paragraph}>Find a best possible way to park</Text>
        <Pressable style={styles.button}>
          <Text style={styles.darkbutton}>Login with email</Text>
        </Pressable>
        <Pressable style={styles.button2}>
          <Text>Login with Phone</Text>
        </Pressable>
      <Text>Don't have an account? <Text style={styles.red}> Sign up</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  skip:{
    alignSelf: "flex-end",
    padding: 20
  },
  red:{
    color: "#C64C4E"
  },
  button:{
    fontSize: 20,
    margin: 10,
    backgroundColor: "#555555",
    padding: 20,
    minWidth: 300,
    alignItems: "center",
    borderRadius: 10
  },
  button2:{
    fontSize: 20,
    margin: 10,
    backgroundColor: "#FFFFFF",
    padding: 20,
    minWidth: 300,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 50
  },
  darkbutton:{
    color: "#ffffff"
  }
  ,
  paragraph:{
    fontSize: 20,
    padding: 10,
    marginBottom: 100
  },
  heading:{
    fontSize: 50,
    fontWeight: "bold"
  },
  picture1:{
    aspectRatio: 308/176,
    margin: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
});
