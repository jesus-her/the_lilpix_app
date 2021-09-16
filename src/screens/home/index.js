import React from "react";
import Gallery from "../../components/home/gallery";
import {
    StyleSheet,
    View,
    ScrollView
} from "react-native";

export default class Home extends React.Component {
    render() {
        return (
            <>

                <View style={styles.container}>
                    <Gallery/>
                </View>

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "rgba(0,255,217,0.75)",
        justifyContent: "space-between",
    },


});