import React from"react";
import { StyleSheet,View,ScrollView } from"react-native";
import Home from "./src/screens/home";
import Gallery from "./src/components/home/gallery";
import Test from './src/screens/test/test'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Test"
                screenOptions={{

                    headerStyle: styles.header,
                    headerHideShadow: true,
                    headerTopInsetEnabled: false,
                    stackAnimation: 'slide_from_right',
                }}>
                <Stack.Screen
                    name='Gallery'
                    component={Gallery}
                />
                <Stack.Screen
                    name='Test'
                    component={Test}
                    options={{title:'Test title from options'}}
                />
            </Stack.Navigator>
        </NavigationContainer>


    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        marginTop:20,
    },
});
