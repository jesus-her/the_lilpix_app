import 'react-native-gesture-handler'; // Not remove from here, it has to be at the top!
import React from"react";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import { StyleSheet, Image, StatusBar } from "react-native";

import logo from "./assets/logo/logo.png"
// Navigation stuff
import { NavigationContainer } from '@react-navigation/native';
import  {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

export default function App(){
    return(

        <NavigationContainer card={"#000"}>
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerLeft: () => <Image source={logo} style={styles.logo}/>,
                    title: "",
                    headerTintColor: "#fff",
                    headerStyle: {backgroundColor: "#000",}
                }}
            />
            <Stack.Screen
                name="ImageScreen"
                component={ImageScreen}
                options={{
                    title: "",
                    headerTintColor: "#fff",
                    headerStyle: {backgroundColor: "#000",}
                }}
            />

        </Stack.Navigator>
            <StatusBar
                hidden = {false} backgroundColor = "#000" translucent = {true}
                barStyle="light-content"
            />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#0D1117",
        padding: 30,
    },
    nav:{
        color: "#fff",
        fontWeight: "bold",
    },
    logo:{
        width:100,
        height:30,
    },
});