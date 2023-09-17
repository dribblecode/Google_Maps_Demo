import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PaymentButton = ({
    text = 'DONE',
    onPress = () => { },
    disabled = false
}) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
            backgroundColor: !disabled?'lightpink':'lightgrey'
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{fontWeight:'bold'}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default PaymentButton

const styles = StyleSheet.create({
    button: {
        height:45,
        backgroundColor:'lightpink',
        marginHorizontal:50,
        borderRadius:10, 
        justifyContent:'center',
        alignItems:'center'
    }
})