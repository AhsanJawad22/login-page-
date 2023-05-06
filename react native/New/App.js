import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import {  title , } from 'react-native';

export default function App() {
  const[name, setName] = useState("My First Login From");

  const[name1, setName1] = useState("Email ");

  const handleChange=()=>{
    setName(e);
  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>

      <Text>Enter Your Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={name1}
        // keyboardType='numeric'
        // secureTextEntry={true}
      />

      
<Text>Enter Your Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={name}
        keyboardType='numeric'
        secureTextEntry={true}
      />
      <StatusBar style="auto" />
      <Button title='submint'/>
    </View>
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
