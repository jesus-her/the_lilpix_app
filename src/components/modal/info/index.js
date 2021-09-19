import React from "react";
import {Image, StyleSheet, Text, View,} from "react-native";


export default class Info extends React.Component {
    render() {
        return (
            <>
                <View style={styles.infocontainer}>

                            <View style={styles.info} >
                                <Text style={styles.mtf}> LILPIX MON-TO-FRI</Text>
                                <Text style={styles.title}>ROTTEN EGG 🥚  </Text>
                                <Text style={styles.description}>Description of picture
                                 and bla, bla, bla, bla, bla, bla, bla, bla, bla,
                                    bla, bla, bla {"\n"}</Text>
                                <Text style={styles.properties}>
                                    ORIGINAL RESOLUTION: "2400 X 3000" px{"\n"}
                                    TOOLS USED: "Blender, Photoshop" {"\n"}
                                    FILE SIZE: "5.4" MB
                                </Text>
                            </View>
                            <View style={styles.stamp}>
                                <Text style={styles.date}>WEEK #9</Text>
                                <Text> date</Text>
                               <Image source={{uri: "https://i.imgur.com/xxgfPHJ.png"}}
                                      style={styles.seal}/>
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
        width: 250,
        height: "100%",
        justifyContent: "flex-start",
        backgroundColor: "rgba(114,114,114,0.27)",
        padding:5,

    },
    mtf:{
      fontSize: 15,
       fontWeight:"bold",
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        textAlign: "left",

    },
    description: {
        textAlign: "justify",
        fontSize: 12,
        fontWeight:"bold",
    },
    properties:{
        fontSize:9,
    },
    stamp: {
        width: 115,
        height: "100%",
        backgroundColor: "rgba(114,114,114,0.27)",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "justify",
        padding:5,
    },
    date:{
        fontSize:20,
        fontWeight:"bold",
    },
    seal:{
        width:80,
        height:80,
    },
    size:{
        fontSize:10,
        fontWeight:"bold",
    },
});