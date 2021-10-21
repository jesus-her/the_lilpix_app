import React, { useState } from "react";
import {View, StyleSheet, Modal, TouchableOpacity, ImageBackground} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import {ReactNativeZoomableView} from "@dudigital/react-native-zoomable-view/dist";
import SetAs from "./SetAs";

const SetWallpaper = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <>
            <Modal
                animationType = "fade"
                visible={modalOpen}
                style={{justifyContent: "center", alignItems: "center"}}
                onRequestClose={() => setModalOpen(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.closeContainer}>
                         <TouchableOpacity>
                            <Ionicons
                                 name="close"
                                 style={styles.close}
                                 onPress={() => setModalOpen (false) }/>
                         </TouchableOpacity>
                    </View>
                    <ReactNativeZoomableView
                        maxZoom={2}
                        minZoom={1}
                        zoomStep={2}
                        initialZoom={1}
                        bindToBorders={true}
                        captureEvent={true}
                        style={{
                            backgroundColor: '#000',
                        }}>
                    <ImageBackground
                        source={{uri: props.wallpaper}}
                        style={styles.imageBackground}
                        >
                    </ImageBackground>
                        </ReactNativeZoomableView>
                </View>

                <SetAs/>
            </Modal>

            <TouchableOpacity>
                <MaterialCommunityIcons
                    name="wallpaper"
                    style={styles.icons}
                    onPress={() => setModalOpen (true) }/>
            </TouchableOpacity>
        </>
    );
};
const styles = StyleSheet.create({
    modal:{
        flex:1,
        width:"100%",
        height:"100%",
    },
    imageBackground:{
        width:"100%",
        height: "100%",
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        resizeMode: "cover"
    },
    closeContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems:"center",
        position: "absolute",
        top: 15,
        right: 0,
        zIndex: 11,

    },
    close:{
        width: "100%",
        color: "#fff",
        backgroundColor:"rgba(0,0,0,0.35)",
        borderRadius: 25,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        padding: 3,
    },
    applyContainer:{
        width:"100%",
        flexDirection:"row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor:"#000",
        padding: 3,
        borderTopColor: "#FF0B56",
        borderTopWidth: 3,
        position: "absolute",
        bottom: 15,
        zIndex: 10,
    },
    apply:{
        color: "#fff",
        backgroundColor:"rgba(0,0,0,0.5)",
        borderRadius: 25,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        padding: 3,
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
    setAsContainer:{
        width: "100%",
        height: "35%",
        backgroundColor:"#fff",
    }
});

export default SetWallpaper
