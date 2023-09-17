import { View, Text, Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import cars from '../assets/data/cars';

const HomeMap = (props) => {
  const [position, setPosition] = useState({
    latitude: 50.843045,
    longitude: 4.425673,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
  });

  // useEffect(() => {
  //   Geolocation.getCurrentPosition((pos) => {
  //     const crd = pos.coords;
  //     setPosition({
  //       latitude: crd.latitude,
  //       longitude: crd.longitude,
  //       latitudeDelta: 0.0421,
  //       longitudeDelta: 0.0421,
  //     });
  //   }) 
  // }, []);

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../assets/images/top-UberX.png')
    }
    if (type === 'Comfort') {
      return require('../assets/images/top-Comfort.png')
    }
    
      return require('../assets/images/top-UberXL.png')
   
  }

  return (
    // <View style={{ backgroundColor:'#a0abff', 
    // justifyContent:'center', alignItems:'center',}}>
       <MapView style={{height:'100%', width:'100%'}}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
     initialRegion={
      {
      latitude: 50.843045,
      longitude: 4.425673,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}
  >
    {cars.map((car) => (
    
      <Marker
      key={car.id}
      coordinate={{latitude: car.latitude, longitude: car.longitude}}>
      <Image source={getImage(car.type)}
      style={{ width: 38,
        height: 38,
        resizeMode:'contain',
        transform: [{rotate: `${car.heading}deg`}]
        }}/>
    </Marker>
    ))}
      
   
  </MapView>
    // </View>
  )
}

export default HomeMap;