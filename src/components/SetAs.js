import React, { useState } from "react";
import {View, StyleSheet , Text, Modal, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const SetAs = () =>{

    const [modalOpen, setModalOpen] = useState(false);
        return (
            <>
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalOpen}
                    onRequestClose={() => setModalOpen(false)}
                >
                    <View style={styles.modal}>
                        <View style={styles.closeContainer}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    name="arrow-down-drop-circle"
                                    style={styles.close}
                                    onPress={() => setModalOpen(false)}/>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity style={styles.iconsText}>
                            <MaterialCommunityIcons name="image" size={25} color="white"/>
                            <Text style={styles.SetAsText}>Set as Lock Screen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconsText} onPress={this.setWallpaper}>
                            <Ionicons name="lock-closed-sharp" size={25} color="white"/>
                            <Text style={styles.SetAsText}>Set as Home Screen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconsText}>

                            <MaterialCommunityIcons name="image" size={12.5} color="white"/>
                            <Ionicons name="lock-closed-sharp" size={12.5} color="white"/>

                            <Text style={styles.SetAsText}>Set both</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>

                <View style={styles.applyContainer}>
                    <TouchableOpacity>
                        <Text style={styles.apply} onPress={() => setModalOpen(true)}>
                            Apply
                        </Text>
                    </TouchableOpacity>

                </View>
            </>
        );
    };

const styles = StyleSheet.create({
    modal:{
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexWrap: "wrap",

        backgroundColor: "#000",
        width:"100%",
        height:"33.3%",
        alignItems: "flex-start",
        justifyContent: "space-around",
        paddingBottom: 15
    },
    iconsText:{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10
    },
    closeContainer: {
        flexDirection:"row",
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: 10,
        position: "absolute",
        top: 0,
        right: 10
    },
    close:{
        width: "100%",
        color: "#fff",
        borderRadius: 25,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
    },
    applyContainer:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"rgba(0,0,0,0)",
        padding: 3,
        borderRadius: 15,
        position: "absolute",
        bottom: 20,
        zIndex: 10,
    },
    apply:{
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"rgba(0,0,0,0.35)",
        borderRadius: 15,
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        padding: 3,
    },
    SetAsText:{
        fontSize: 20,
        color: "#fff",
        margin:15,
    }
});

export default SetAs




