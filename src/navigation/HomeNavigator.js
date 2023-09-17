import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from '../screens/DestinationSearch'
import SearchResult from '../screens/SearchResult';
import PaymentScreen from '../screens/PaymentScreen';
 

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
        return (

              <Stack.Navigator initialRouteName="HomeScreen" 
              screenOptions={{
                headerShown:false,
              }
              }>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
                <Stack.Screen name="SearchResult" component={SearchResult} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />

              </Stack.Navigator>

          );
}

export default HomeNavigator;

const styles = StyleSheet.create({})