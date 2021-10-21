import React from "react";
import { TouchableHighlight, Image, StyleSheet, Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native";

const CardImage = ({image}) => {

    const navigation = useNavigation()

    return(
        <>
            <TouchableHighlight
                style={styles.imageWrap}
                onPress={() => {
                    navigation.navigate("ImageScreen", {image});
                }} >

            <Image
                source={{
                    uri: image.image.url
                        ? image.image.url
                        :"https://i.imgur.com/AMQjgHY.png",
                }}
                style={styles.image}
            />
            </TouchableHighlight>
        </>
    );
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
    },
    imageWrap: {
        padding: 5,
        width: Dimensions.get("window").width / 3 - 5,
        height: Dimensions.get("window").height / 3 - 5,

    },
});

export default CardImage



