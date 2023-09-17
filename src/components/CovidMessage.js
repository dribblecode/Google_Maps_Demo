import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import styles from './Style';

const CovidMessage = () => {
  return (
    <View style={{backgroundColor:'#2b80ff', padding:10,
    borderTopLeftRadius:10, borderTopRightRadius:10}}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>React Native Vector Icons are the most popular custom icons of NPM GitHub library. It has more than 3K (3000) icons collection in it. All these icons are free to use.</Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  )
}

export default CovidMessage

