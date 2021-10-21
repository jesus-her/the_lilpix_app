import React, {useEffect, useState} from "react";
import {View, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from "react-native";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";


const DownloadBtn = ({image}) => {




    return(
        <>
                <TouchableOpacity
                    onPress={() =>
                        handleDownload()}
                >
                    <MaterialCommunityIcons name="wallpaper" style={styles.download} />
                </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    download: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
    },
});

export default DownloadBtn