import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/diceOne.png'
import DiceTwo from '../assets/diceTwo.png'
import DiceThree from '../assets/diceThree.png'
import DiceFour from '../assets/diceFour.png'
import DiceFive from '../assets/diceFive.png'
import DiceSix from '../assets/diceSix.png'
import DiceDefault from '../assets/dice.gif'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>

const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceDefault)
  
  const rollTheDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    switch(randomNumber){
      case 1:
        setDiceImage(DiceOne)
        break
      case 2:
        setDiceImage(DiceTwo)
        break
      case 3:
        setDiceImage(DiceThree)
        break
      case 4:
        setDiceImage(DiceFour)
        break
      case 5:
        setDiceImage(DiceFive)
        break
      case 6:
        setDiceImage(DiceSix)
        break
      default:
        setDiceImage(DiceDefault)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  
  return (
    <>
      <StatusBar backgroundColor={'#222831'} barStyle={'light-content'}/>
    
      <View style={styles.container}>
        <Dice imageUrl={diceImage}/>
        <Pressable
          onPress={rollTheDice}
        >
          <Text style={styles.btnText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  diceImage:{
    width: 200,
    height: 200,
    backgroundColor: '#222831',
  },
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    marginTop: 20,
    fontSize: 20,
    color: '#00adb5',
    fontWeight: 'bold',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#00adb5',
    borderRadius: 5,
  },
});

export default App;
