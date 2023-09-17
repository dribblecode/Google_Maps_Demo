import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import CustomDrawer from './CustomDrawer';



const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
    <Text>{props.name}</Text>
  </View>
)



const RootNavigator = () => {
        return (
          <NavigationContainer>
            <Drawer.Navigator 
            screenOptions={{
                headerShown:false,
              }}
              drawerContent={
                (props) => (
                  <CustomDrawer {...props} />
                )
              }>
              <Drawer.Screen name='Home' component={HomeNavigator}/>
           
              <Drawer.Screen name="Your Trips">
           {() => <DummyScreen name={"Your Trips"} />}
        </Drawer.Screen>

            <Drawer.Screen name='Help'>
            {() => <DummyScreen name="Help"/>}
            </Drawer.Screen>

            <Drawer.Screen name='Wallet'>
              {() => <DummyScreen name="Wallet"/>}
            </Drawer.Screen>

            <Drawer.Screen name='Settings'>
              {() => <DummyScreen name="Settings"/>}
            </Drawer.Screen>

</Drawer.Navigator>
              </NavigationContainer>

          );
}

export default RootNavigator;

const styles = StyleSheet.create({})