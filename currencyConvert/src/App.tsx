import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

//constants
import { currencyByBDT } from './constants';
//components
import CurrencyButton from './components/currencyButton';

import Snackbar from 'react-native-snackbar';


function App(): React.JSX.Element {

  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('0.00');
  const [targetCurrency, setTargetCurrency] = useState('');
  
  const buttonPressd = (targetValue: Currency) => {
    if(!inputValue){
      setResultValue('0.00');
      return Snackbar.show({
        text: 'Please enter a value',
        textColor: '#FF0000',
        backgroundColor: '#FFFFFF',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if(isNaN(inputAmount)){
      setResultValue('0.00');
      setInputValue('');
      return Snackbar.show({
        text: 'Please enter a valid number',
        textColor: '#FF0000',
        backgroundColor: '#FFFFFF',
      });
    }

    const convertedValue = inputAmount * targetValue.value;
    const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
    setResultValue(result);
    setTargetCurrency(targetValue.name);
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.conainer}>
        <View style={styles.topContainer}>
          <View style={styles.bdtContainer}>
            <Text style={styles.bdt}>৳</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always' //only for ios
              keyboardType='number-pad'
              onChangeText={setInputValue}
              placeholder='Enter Amount in BDT'
              style={styles.inputAmountField}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
            numColumns={3}
            data={currencyByBDT}
            keyExtractor={item => item.name}
            renderItem = {({item}) => (
              <Pressable
                style={[styles.button, targetCurrency === item.name && styles.selected]}
                onPress={() => buttonPressd(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conainer:{
    flex: 1,
    backgroundColor: '#f2f7fc',
  },
  topContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultTxt:{
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  bdt:{
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  bdtContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField:{
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#515151',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  bottomContainer:{
    flex: 3,
  },
  button:{
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#FFF',
    elevation: 2,
    shadowOffset:{
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected:{
    backgroundColor: '#ffeaa7',
  },
});

export default App;
