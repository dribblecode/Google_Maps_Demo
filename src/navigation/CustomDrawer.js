import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor: 'black', padding: 10, marginTop:-10 }}>

                <View
                    style={{ borderBottomColor: '#eeeeee', borderBottomWidth: 1, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
                >
                    <FontAwesome name='user-circle-o' size={40} color={'white'} />
                    <View style={{ paddingLeft: 15, }}>
                        <Text style={{ color: 'white' }}>Shanu</Text>
                        <Text style={{ color: 'white' }}>5.00 ★ </Text>
                    </View>
                </View>

                <View
                    style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Text> <Text style={{ color: 'white' }}>Messages</Text> 🔵</Text>
                    <FontAwesome name='angle-right' size={20} color={'white'} />
                </View>

                <Pressable
                    style={{ paddingVertical: 10 }}
                    onPress={() => { console.warn('Do something more') }}>
                    <Text style={{ color: '#919191' }}>
                        Do more with your account
                    </Text>
                </Pressable>

                <Pressable
                    style={{ paddingBottom: 10 }}
                    onPress={() => { console.warn('Make Money driving') }}>
                    <Text style={{ color: 'white' }}>
                        Make Money driving
                    </Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})