import React from "react";
import { StyleSheet, Image } from "react-native";

export default class ImageElement extends React.Component {
    render() {
        return <Image source={{uri: this.props.imgsource}} style={styles.image} />;
    }
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
    },
});