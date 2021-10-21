import React, {Component} from "react";
import { StyleSheet, Animated, TouchableOpacity, Easing} from "react-native";
import seal from "../../../../assets/logo/adaptive-icon_NO_background.png"

export default  class Icon extends Component{

    constructor(props) {
        super(props);
        this.state = {
            fadeValue: new Animated.Value(1),
            rotateValue: new Animated.Value(0)
        }
    }
    _rotateAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.rotateValue, {
                toValue: 100,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(this.state.rotateValue, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true
            })
        ]).start(() => {
            /*this._rotateAnimation();*/ //rotate indefinitely
        })
    }

    render() {
        const interpolatedRotation = this.state.rotateValue.interpolate({
            inputRange: [0, 100],
            outputRange: ["0deg", "360deg"],
        })
    return (
        <>

                <TouchableOpacity
                    style={ styles.sealContainer}
                    onPress={this._rotateAnimation}
                >
                <Animated.Image
                    source={seal}
                    style={[styles.animationView, {transform: [{rotate: interpolatedRotation}]},
                        ]}
                />
                </TouchableOpacity>

        </>
    );
}
}

const styles = StyleSheet.create({
    sealContainer:{
        width:"90%",
        height:"70%",
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,

        position: "relative",
        borderRadius: 50

    },

    animationView: {
        width: 90,
        height: "100%",
        borderRadius: 50,
        position: "absolute",


        backgroundColor: "rgba(255,204,0,0)",
    }
});

