import React from "react";
import { Image, ImageBackground, StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import Info from "../components/modal/info";
import { ScaledSheet } from 'react-native-size-matters';
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

       <View style={styles.container}>
            {/*<TouchableWithoutFeedback
                style={styles.imageBehindWrap}
                onLongPress={() => {
                    console.log("hi");
                }} >*/}
                <Image
                     source={{uri: image.image.url}}
                    style={styles.imageModal}
                 />

           {/* </TouchableWithoutFeedback>*/}

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
       </View>
            <ImageBackground source={{uri: image.image.url}} style={styles.imageBackground} resizeMode="cover" blurRadius={25}>
            </ImageBackground>

        </>
    )
}
const styles = ScaledSheet.create({

container:{
  backgroundColor: "#dc0404",
    flex: 1,
    marginLeft: "20@s",
    marginRight: "20@s",
    },
    imageBackground:{
        width:"100%",
        height: "100%",
        alignItems: "stretch",
        justifyContent: "center",
        position: "absolute",
        flex:1,
        zIndex: -11,
    },
    imageModal: {
        flex: "1@s",
        width: "100%",
    },
   /* imageBehindWrap:{

    },*/
    iconsContainer: {
        width:"100%",
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor:"#000",
        padding: "3@s",
        borderTopColor: "#FF0B56",
        borderTopWidth: "3@s"
    },
    icons: {
        width: "100%",
        color: "#fff",
        fontSize: "25@s",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor:"rgba(0,0,0,0)",
        padding: "3@s",
    },
});

export default ImageScreen