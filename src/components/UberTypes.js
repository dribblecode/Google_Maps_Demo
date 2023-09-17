import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from './Style'
import UberTypeRow from './UberTypeRow'
 import typesData from '../assets/data/types';
import types from '../assets/data/types';
import { useNavigation } from '@react-navigation/native';

const UberTypes = (props) => {
  const navigation = useNavigation();
  const confirm = () => {
    navigation.navigate('PaymentScreen')
  }
  return (
    <ScrollView style={{}}>
      {typesData.map(type => <UberTypeRow type={type} key={type.id} />)}
      
      <Pressable onPress={confirm}
      style={{ 
      backgroundColor:'black', 
      padding:10, margin: 10, alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold'}}>
          Confirm Uber
        </Text>
      </Pressable>
    </ScrollView>
  )
}

export default UberTypes