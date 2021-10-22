import React, {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {getImages} from "../api/strapi";
import ImageList from "../components/ImageList";

const HomeScreen = () => {

    const [photos, setPhotos] = useState([]);

    const loadImages = async  () => {
        const res = await  getImages()
      console.log(res.data);
        setPhotos(res.data);
    };
    useEffect(() => {
        loadImages();
    }, []);


    return(
        <>
        <View style={styles.container}>
            <ImageList photos={photos.reverse()} />
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#0D1117",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomeScreen


