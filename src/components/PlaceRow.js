import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";

const PlaceRow = ({ data }) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {data.description === 'Home'
                    ? <Entypo name='home' siz={20} color={'white'} />
                    : <Entypo name='location-pin' siz={20} color={'white'} />
                }
            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    )
}

export default PlaceRow;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    iconContainer: {
        marginRight:10,
        borderRadius:30,
        backgroundColor:'#a2a2a2',
        padding: 5
    },
    locationText: {

    }
})