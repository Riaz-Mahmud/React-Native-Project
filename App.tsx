import React from 'react'

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

function App(){
  return(
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <View style = {styles.body}>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body:{
    margin: 10,
  }
})

export default App;