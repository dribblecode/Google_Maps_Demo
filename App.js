/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert
} from 'react-native';
import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import RootNavigator from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {SP_KEY} from '@env';
import PaymentScreen from './src/screens/PaymentScreen';
import { StripeProvider } from '@stripe/stripe-react-native';


navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {

  

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message:
            'This App needs access to your location ' +
            'so you can take ride anywhere.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <RootNavigator/>
   );
 };

const styles = StyleSheet.create({

});

export default App;
