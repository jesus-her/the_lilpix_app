import React from 'react'
import {View, Text} from 'react-native'
import { TouchableOpacity } from "react-native";

const Test = ({navigation})=>{
    const onPress = ()=> navigation.navigate('Gallery');

    return(
        <View>
            <Text>Hola mundo</Text>
            <TouchableOpacity
                onPress={onPress}
            >
                <Text>Go to Gallery</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Test;
