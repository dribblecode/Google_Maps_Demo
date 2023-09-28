import { View, Text, TextInput, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import styles from '../components/Style'
import PlaceRow from '../components/PlaceRow';
import Geolocation from '@react-native-community/geolocation';


const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 50.8484401, lng: 4.4381574 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 50.8463508, lng: 4.3694489 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);



  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResult', {
        originPlace,
        destinationPlace,
      })
    }
  }

  const handleOriginSelect = (data, details) => {
    const { location } = details.geometry;
    const { lat, lng } = location;
    setOriginPlace({ latitude: lat, longitude: lng });
    console.log('originPlace:', originPlace);

  };

  const handleDestinationSelect = (data, details) => {
    const { location } = details.geometry;
    const { lat, lng } = location;
    setDestinationPlace({ latitude: lat, longitude: lng });
    console.log('destinationPlace:', destinationPlace);

  };

  useEffect(() => {
    // checkNavigation();
    // console.log('OriginPlace:', originPlace);
    // console.log('DestinationPlace:', destinationPlace);
  }, [originPlace, destinationPlace]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (info) => {},
      (error) => {},
      { timeout: 20000 }
  );
  }, [])
  

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>

        <GooglePlacesAutocomplete
          placeholder='From'
     
        onPress={handleOriginSelect}
          nearbyPlacesAPI='GooglePlacesSearch'
        // debounce={300}
          currentLocation={true}
          currentLocationLabel='Current location'
          fetchDetails={true}
          query={{
            key: 'AIzaSyBFLt3HlB8oamUOSBTIStn1ZAhvqMvmZFY',
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 0,
              left: 10,
              right: 10
            },
            listView: {
              position: 'absolute',
              top: 107
            },
            separator: {
              backgroundColor: '#efefef',
              height: 1,
            }
          }}
          suppressDefaultStyles
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder='Where to?'
          // onPress={(data, details) => {
          //   setDestinationPlace({data,details});
          //   // console.log('DestinationPlace Data:', data);
          //   console.log("----------------------------------")
          //   console.log('DestinationPlace details:', details);

          // }}
          onPress={handleDestinationSelect}
          enablePoweredByContainer={false}
          fetchDetails={true}
          query={{
            key: 'AIzaSyBFLt3HlB8oamUOSBTIStn1ZAhvqMvmZFY',
            language: 'en',
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 55,
              left: 10,
              right: 10
            },
            separator: {
              backgroundColor: '#efefef',
              height: 1,
            }
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          // renderDescription={(data) => data.description || data.vicinity}
          // predefinedPlaces={[homePlace, workPlace]}
        />


        {/* Circle near Origin input */}
        <View style={{
          backgroundColor: 'black',
          width: 5,
          height: 5,
          position: 'absolute',
          top: 25,
          borderRadius: 10
        }} />

{/* Line between dots */}
        <View style={{
          backgroundColor: '#919191',
          width: 2,
          height: 53,
          position: 'absolute',
          top: 29,
          left: 2,
          borderRadius: 10
        }} />

{/* Square near Destination input */}
        <View style={{
          backgroundColor: 'black',
          width: 5,
          height: 5,
          position: 'absolute',
          top: 82,
        }} />


      </View>
      <Button title='GO' onPress={checkNavigation} style={{ }}/>
     
    </SafeAreaView>
  )
}

export default DestinationSearch