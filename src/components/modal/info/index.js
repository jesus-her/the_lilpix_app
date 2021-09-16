import React from "react";
import { StyleSheet, Text, View, } from "react-native";


export default class Info extends React.Component {
    render() {
        return (
            <>
                <View style={styles.infocontainer}>

                            <View style={styles.info} >
                                <Text> LILPIX MON-TO-FRI</Text>
                                <Text> TITLE </Text>
                                <Text style={styles.bla}>DESC</Text>
                            </View>
                            <View style={styles.stamp}>
                                <Text>DATE</Text>
                                <Text>(authentication seal)</Text>
                                <Text>Size</Text>
                            </View>

                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    infocontainer: {
        width: "100%",
        height: "25%",
        maxHeight: "25%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
        padding: 10,
    },
    info: {
        width: 225,
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgb(114,114,114)",
    },
    bla: {
        textAlign: "justify",
    },
    stamp: {
        width: 100,
        height: "100%",
        backgroundColor: "rgb(134,134,134)",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "justify",
    },
});