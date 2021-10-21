import React from "react";
import { Image, ImageBackground, StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import Info from "../components/modal/info";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import ImageBehind from "../components/ImageBehind";
import SetWallpaper from "../components/SetWallpaper";

const ImageScreen = ({route}) => {
    const {image} = route.params

    const downloadFile = async () => {
        let fileUri = FileSystem.documentDirectory + image.title + ".jpeg";

        try {
            const { uri } = await FileSystem.downloadAsync(
                image.image.url,
                fileUri
            );
            saveFile(uri);
            alert ("Saved to photos! 🤙")
        } catch (error) {
            console.error(error);

        }
    };

    const saveFile = async (fileUri) => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status === "granted") {
            const asset = await MediaLibrary.createAssetAsync(fileUri);
            await MediaLibrary.createAlbumAsync("Download", asset, false);
        }
    };

    const handleDownload = async () => {
        downloadFile();
    };


    return(
        <>

        <ImageBackground source={{uri: image.image.url}} style={styles.imageBackground} resizeMode="cover" blurRadius={25}>
            <TouchableWithoutFeedback
                style={styles.imageBehindWrap}
                onLongPress={() => {
                    console.log("hi");
                }} >
                <Image
                     source={{uri: image.image.url}}
                    style={styles.imageModal}
                 />

            </TouchableWithoutFeedback>

            <Info
                week=""
                date={image.date}
                title={image.title}
                width={image.image.width}
                height={image.image.height}
                size={image.image.size}
            />


            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    onPress={() =>
                        handleDownload()}
                >
                <MaterialCommunityIcons name="download" style={styles.icons} />
                </TouchableOpacity>

                <SetWallpaper wallpaper={image.image.url}/>

            </View>

        </ImageBackground>
        </>
    )
}
const styles = StyleSheet.create({

    imageBackground:{
        width:"100%",
        height: "100%",
        position:"relative",
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#000"
    },

    imageModal: {
        flex: 1,
        width: "80%",
        height: "100%",
        position: "relative",
        alignSelf:"center",
        opacity:1,
    },
    imageBehindWrap:{
        flex: 1,
        width: "100%",
        alignSelf:"center",
        justifyContent:"center",
    },
    iconsContainer: {
        width:"80%",
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor:"#000",
        padding: 3,
        borderTopColor: "#FF0B56",
        borderTopWidth: 3
    },
    icons: {
        width: "100%",
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor:"rgba(0,0,0,0)",
        padding: 3,
    },
});

export default ImageScreen