import React from"react";
import { StyleSheet,View,ScrollView } from"react-native";
import Home from "./src/screens/home";
import Gallery from "./src/components/home/gallery";

export default function App(){
    return(

    <View style={styles.container}>
<ScrollView>
        <Gallery/>
</ScrollView>

</View>

);
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        marginTop:20,
    },
});
