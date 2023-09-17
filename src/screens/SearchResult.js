import { View, Text, Dimensions } from 'react-native'
import React from 'react';
import HomeMap from '../components/HomeMap';
import UberTypes from '../components/UberTypes';
import RouteMap from '../components/RouteMap';
import { useRoute } from '@react-navigation/native';


const SearchResult = (props) => {
  const route = useRoute();
  // const {originPlace, destinationPlace} = route.params

  console.log('Route:', route.params)
  return (
    <View style={{display:'flex'}}>
          <View style={{
            height:Dimensions.get('window').height-350,
            // height:350
            }}>
 <RouteMap 
//  origin={originPlace} destination={destinationPlace} 
 />
 </View>
      <UberTypes/>
     
    </View>
  )
}

export default SearchResult