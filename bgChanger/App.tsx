import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const changeBackgroundColor = () =>{
    const color = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++){
      newColor += color[Math.floor(Math.random() * 16)];
    }
    setBackgroundColor(newColor);
  }

  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={[styles.mainView, {backgroundColor:backgroundColor}]}>
        <TouchableOpacity style={styles.button}
        onPress={changeBackgroundColor}
        >
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
    margin: 10,
  },
})