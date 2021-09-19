import 'react-native-gesture-handler'; // Not remove from here, it has to be at the top!
import React from"react";
import { StyleSheet,View,ScrollView } from"react-native";
import Gallery from "./src/components/home/gallery";


// Navigation stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MyDrawer = ()=>{
    return(
        <Drawer.Navigator
            initialRouteName="Gallery"

        >
            <Drawer.Screen
                name='Gallery'
                component={Gallery}
                options={{
                    headerShown: false
                }}
            />

        </Drawer.Navigator>
    );
}

export default function App(){
    return(
        <NavigationContainer>
            <MyDrawer />
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
