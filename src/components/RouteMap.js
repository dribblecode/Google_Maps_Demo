import { View, Text, Image, FlatList } from 'react-native'
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';



const GOOGLE_MAPS_APIKEY = 'AIzaSyBFLt3HlB8oamUOSBTIStn1ZAhvqMvmZFY'

const RouteMap = (props) => {

    const origin = {
      latitude: 50.8429581,
      longitude: 4.4243679
    };
  
    const destination = {
      latitude: 50.845985,
      longitude: 4.3689339999
    };

    // const originLoc = {
    //   latitude: origin.details.geometry.location.lat,
    //   longitude: origin.details.geometry.location.lng,
    // };
  
    // const destinationLoc = {
    //   latitude: destination.details.geometry.location.lat,
    //   longitude: destination.details.geometry.location.lng,
    // };

    // console.log('Origin:',originLoc);
    // console.log('destination:',destinationLoc);

  return (
    // <View style={{ backgroundColor:'#a0abff', 
    // justifyContent:'center', alignItems:'center',}}>
       <MapView style={{height:'100%', width:'100%'}}

        provider={PROVIDER_GOOGLE}
     initialRegion={{
      latitude: 50.843045,
    longitude: 4.425673,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}
  >
  
  <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="red"
  />
     <Marker
      coordinate={origin}
      title={'Origin'}
    />
      <Marker
      coordinate={destination}
      title={'Destination'}
    />
  </MapView>
    
  )
}

export default RouteMap;