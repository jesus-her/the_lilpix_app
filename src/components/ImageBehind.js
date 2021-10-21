import React from "react";
import {View, Image, StyleSheet} from "react-native";

const ImageBehind = () => {

    return(
        <>
                <Image
                    source={{uri: "https://i.imgur.com/zglV62s.png"}}
                    style={styles.imageBehind}
                />
        </>
    )
}
const styles = StyleSheet.create({

    imageBehind: {
        flex: 1,
        position: "absolute",
        width: 200,
        height: 200,
        alignSelf:"center",
        justifyContent: "center",
        alignItems: "center",

    },

});

export default ImageBehind