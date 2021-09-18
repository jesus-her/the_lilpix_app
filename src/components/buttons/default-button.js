import React from 'react';
import { StyleSheet, View, Text, Pressable} from "react-native";
const DefaultButton = (props) => {
    return(
        <Pressable
            style={styles.btn}
            onPress={props.onPress}
            hitSlop={2}
        >
            <Text style={styles.txt}>{props.text}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    btn:{
        width:150,

        backgroundColor: "purple",
        borderRadius: 50,
    },
    txt:{
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',


    }
});
export default DefaultButton;
