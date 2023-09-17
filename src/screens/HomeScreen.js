import { StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native'
import React from 'react';
import HomeMap from '../components/HomeMap';
import CovidMessage from '../components/CovidMessage';
import HomeSearch from '../components/HomeSearch';


const HomeScreen = (props) => {
  return (
    <View>
      
      <View style={{height:Dimensions.get('window').height-380}}>
 <HomeMap/>
 </View>
      <CovidMessage/>
      <ScrollView>
      <HomeSearch/>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})