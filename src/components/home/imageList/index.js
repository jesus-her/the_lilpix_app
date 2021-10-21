import React, {useState} from "react";
import {View, Text, FlatList} from "react-native";
import {weeks} from "../../../../data";
const ImageList = ({posts}) => {
    const renderItem = (({item}) => <Text> {item.number}</Text>)
    return(
        <View>
            <Text>hola me llamo juan</Text>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
export default ImageList