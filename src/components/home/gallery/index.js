import React, { Component } from "react";
import ImageElement from "../imageElement";
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
        modalImage: "https://i.imgur.com/hMQ5qR3.png",
        images: require ("../../../../data.json"),
    };

    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    getImage() {
        return this.state.modalImage;
    }

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
                        <Text
                            style={styles.close}
                            onPress={() => {
                                this.setModalVisible(false);
                            }}
                        >
                            X
                        </Text>
                        {/*<ImageElement imgsource={this.state.modalImage}/>*/}
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
        backgroundColor: "#ff0000",
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
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#003bff",
        top: 2,
        left: 10,
        position: "absolute",
        zIndex: 10,
        textAlign: "center",
    },
});