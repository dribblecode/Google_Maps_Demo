import { View, Text, Dimensions } from 'react-native'
import React from 'react';
import HomeMap from '../components/HomeMap';
import UberTypes from '../components/UberTypes';
import RouteMap from '../components/RouteMap';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useRoute } from '@react-navigation/native';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBFLt3HlB8oamUOSBTIStn1ZAhvqMvmZFY'


const SearchResult = (props) => {
  const route = useRoute();
  const {originPlace, destinationPlace} = route.params

  const originLoc = {
    latitude: route?.params?.originPlace.latitude,
    longitude: route?.params?.originPlace.longitude,
  };

  const destinationLoc = {
    latitude: destinationPlace.latitude,
    longitude: destinationPlace.longitude,
  };

  return (
    <View style={{display:'flex'}}>
          <View style={{
            height:Dimensions.get('window').height-350,
            // height:350
            }}>
 {/* <RouteMap 
 origin={originPlace} destination={destinationPlace} 
 /> */}
 <MapView style={{height:'100%', width:'100%'}}
// showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
     initialRegion={{
      latitude: originLoc.latitude,
    longitude: originLoc.longitude,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}
  >
  
  <MapViewDirections
    origin={originLoc}
    destination={destinationLoc}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={4}
    strokeColor="black"
  />
     <Marker
      coordinate={originLoc}
      title={'Origin'}
    />
      <Marker
      coordinate={destinationLoc}
      title={'Destination'}
    />
  </MapView>
 </View>
      <UberTypes/>
     
    </View>
  )
}

export default SearchResult