import { View, Text, Image } from 'react-native'
import React from 'react';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import typesData from '../assets/data/types';



const UberTypeRow = (props) => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../assets/images/UberX.jpeg')
    }
    if (type.type === 'Comfort') {
      return require('../assets/images/Comfort.jpeg')
    }
    
      return require('../assets/images/UberXL.jpeg')
   
  }

  return (
    <View style={styles.uberContainer}>
      <Image style={styles.carImage} 
      source={getImage()}/>
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
            {type.type} {' '}
            <Ionicons name={'person'} size={16} />
            3
        </Text>
        <Text style={styles.time}>
            8:00pm dropp off
        </Text>
      </View>

      <View style={styles.rightContainer}>
      <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
<Text style={styles.price}>
    est. ${type.price}
</Text>
      </View>
    </View>
  )
}

export default UberTypeRow;