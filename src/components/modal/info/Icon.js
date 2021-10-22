import React, {Component} from "react";
import { StyleSheet, Animated, TouchableOpacity, Easing} from "react-native";
import seal from "../../../../assets/logo/adaptive-icon_NO_background.png"
import {ScaledSheet} from "react-native-size-matters";

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
                duration: 3500,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(this.state.rotateValue, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true
            })
        ]).start(() => {
            /*this._rotateAnimation();*/ /*rotate indefinitely*/
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

const styles = ScaledSheet.create({
    sealContainer:{
        width:"100%",
        height:"70%",
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        margin: "5@s",
        position: "relative",

    },

    animationView: {
        width:"100%",
        height:"100%",
        position: "absolute",
        backgroundColor: "rgba(255,204,0,0)",
    }
});

