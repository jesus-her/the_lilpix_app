import React, { Component } from "react";
import ImageElement from "../imageElement";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Dimensions,
    TouchableWithoutFeedback,
} from "react-native";
import Info from "../../modal/info";


export default class Gallery extends React.Component {
    state = {
        modalVisible: false,
        modalImage: "",
        urlModalImage: "",
        images: require ("../../../../data.json"),
    };

    setModalVisible = async (visible, imageKey)=> {
        try {
            this.setState({ modalImage: this.state.images[imageKey] });

            console.log(this.state.modalImage)
            this.setState({ modalVisible: visible });
        }catch (error){
            console.log(error);
        }
    }

    getImage() {
        return this.state.modalImage;
    }

    // getMoviesFromApiAsync = async () => {
    //     try {
    //         const response = await fetch(
    //             'https://reactnative.dev/movies.json'
    //         );
    //         const json = await response.json();
    //         return json.movies;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    render() {
        let images = this.state.images.map((val, key) => {
            return (
                <TouchableWithoutFeedback
                    key={key}
                    onPress={() => {
                        this.setModalVisible(true, key);
                    }}
                >
                    <View style={styles.imagewrap}>
                        <ImageElement  imgsource={val.url}/>
                    </View>
                </TouchableWithoutFeedback>
            );
        });

        return (
            <View style={styles.container}>
                <Modal
                    style={styles.modal}
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {}}
                >
                    <View style={styles.modal}>
                        <Ionicons
                            name="close"
                            style={styles.close}
                            onPress={() => {this.setModalVisible(false)}}
                        />
                        <MaterialCommunityIcons
                            name="download"
                            style={styles.download}
                        />
                        <View style={styles.rgb}>
                            <Image
                                source={{uri: "https://i.imgur.com/AMQjgHY.png"}}
                                style={styles.image}
                            />
                        </View>
                        <Info/>
                    </View>
                </Modal>

                {images}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#00ffd9",
        justifyContent: "space-between",
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        width: Dimensions.get("window").width / 3 - 5,
        height: Dimensions.get("window").height / 3 - 5,
        backgroundColor: "#1e943a",
    },
    rgb:{
backgroundColor: "red",
        width:"100%",
        height: "100%",
        position:"relative",
        flex:1,
        padding:8,
    },

    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
        position:"absolute",
        margin:8,
        opacity:1,
    },
    modal: {
        flex: 1,
        backgroundColor: "rgba(40,40,40,0.5)",
        width: "100%",
        height: "100%",
        paddingHorizontal: 0,
        zIndex: 9,

    },

    close: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
        top: 5,
        left: 10,
        position: "absolute",
        zIndex: 10,
        textAlign: "center",
        backgroundColor:"#fff",
        borderRadius:50,
        padding: 5,
    },
    download: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
        top: 5,
        right: 10,
        position: "absolute",
        zIndex: 10,
        textAlign: "center",
        backgroundColor:"#fff",
        borderRadius:50,
        padding: 5,
    },
});
