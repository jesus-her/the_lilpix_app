import React from "react";
import {View, StyleSheet, FlatList} from "react-native";
import CardImage from "./CardImage";

const ImageList = ({photos}) => {

    const renderItem = ({ item, index }) => <CardImage image={item} />;

    return(

        <View style={styles.imageContainer}>
            <FlatList
              
                data={photos}
                renderItem= {renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </View>

    );
};
const styles = StyleSheet.create({

    imageContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity:1,
        margin:5,
    },

});



export default ImageList
