import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import TextTicker from 'react-native-text-ticker'
import Icon from "./Icon";
const Info = (props) => {

        return (
            <>
                <View style={styles.infoContainer}>
                    <View style={styles.info} >
                        <Text style={styles.mtf}> LILPIX MON-TO-FRI</Text>
                        {props.title.length <15 ? (
                        <Text style={styles.titleBig}>{props.title}</Text>
                        ) : (
                            <TextTicker
                                duration={5000}
                                loop
                                bounce={false}
                                shouldAnimateTreshold={40}
                                repeatSpacer={150}
                                marqueeDelay={500}
                                style={styles.title}
                            >
                                {props.title}
                            </TextTicker>
                        )}

                        <Text style={styles.properties}>
                                    ORIGINAL RESOLUTION: {props.width} x {props.height} px{"\n"}
                                    TOOLS USED: Blender, Photoshop {"\n"}
                                    FILE SIZE: {props.size} Bytes
                        </Text>
                    </View>
                    <View style={styles.stamp}>
                        <Text style={styles.week}>WEEK #{props.week}</Text>
                        <Text style={styles.date}>{props.date}</Text>

                     <Icon/>

                    </View>
                </View>
            </>
        );
}

const styles = ScaledSheet.create({
    infoContainer: {
        width: "80%",
        height: "25%",
        maxHeight: "25%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: "5@s",
    },
    info: {
        width: "70%",
        height: "100%",
        justifyContent: "flex-start",
        backgroundColor: "#000",
        padding:"4@s",
    },
    mtf:{
      fontSize: "15@s",
        color: "#fff"
    },
    titleBig:{
        fontSize:"31@s",
        fontWeight:"bold",
        textAlign: "left",
        color: "#fff"
    },
    title:{
        fontSize:"45@s",
        fontWeight:"bold",
        textAlign: "left",
        color: "#fff"
    },
    description: {
        textAlign: "justify",
        fontSize: "12@s",
        fontWeight:"bold",
        color: "#fff"
    },
    properties: {
        fontSize: "10@s",
        color: "#D0D0D0",
    },
    stamp: {
        width: "30%",
        height: "100%",
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding:"5@s",
    },
    date:{
        fontSize:"12@s",
        fontWeight:"bold",
        color: "#fff"
    },
    week:{
        fontSize:"13@s",
        fontWeight:"bold",
        color: "#fff"
    },
});
export default Info