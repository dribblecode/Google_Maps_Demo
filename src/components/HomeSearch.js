import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

import styles from './Style';

const HomeSearch = (props) => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  }
  return (
    <ScrollView>
      {/* input box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>
          Where to?
        </Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text style={{ color: '#535353' }}>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} color={'#535353'} />

        </View>
      </Pressable>

      {/* Previous destination */}
      
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>

      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: '#218cff' }]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Home</Text>

      </View>
    </ScrollView>
  )
}

export default HomeSearch

