import React from "react";
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import { StyleSheet, Text, View,  StatusBar } from "react-native";

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>

                <Text style={styles.nav}>WEEKS</Text>
                <Text style={styles.nav}>HOME</Text>
                <Text style={styles.nav}>SAVED</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        height: "3%",
        alignItems:"center",
justifyContent:"space-around",
        backgroundColor: "#09c1a6",
        marginTop: StatusBar.currentHeight,
    },
    nav:{
      fontWeight: "bold",
    },
});