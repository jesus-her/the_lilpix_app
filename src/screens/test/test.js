import React from 'react'
import {View, Text} from 'react-native'
import { TouchableOpacity, StyleSheet } from "react-native";
import DefaultButton from "../../components/buttons/default-button";

const Test = ({navigation})=>{
    const onPress = ()=> navigation.navigate('Gallery');
    const onPress2 = ()=> navigation.push('Test');

    return(
        <View>
            <Text>NAVIGATION</Text>
            <DefaultButton  onPress={onPress} text={'Default Text'}/>
            <TouchableOpacity
                onPress={onPress}
                style={styles.btn}
            >
                <Text style={{color: 'white'}}>Go to Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onPress2}
                style={{backgroundColor: 'purple'}}
            >
                <Text style={{color: 'white'}}>Go to this page again</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> navigation.goBack()}
                style={{backgroundColor: 'black'}}
            >
                <Text style={{color: 'white'}}>Go back</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={()=> navigation.popToTop()}
                style={{backgroundColor: 'blue'}}
            >
                <Text style={{color: 'white'}}>GO TO THE FIRST SCREEN</Text>
            </TouchableOpacity>

            <DefaultButton  onPress={()=> navigation.setOptions({title:'updated!'})} text={'change the title'}/>
        </View>
    )
}
const styles = StyleSheet.create({
   btn:{
       width: 200,
       marginTop: 20,
       backgroundColor: "green",
       padding: 15,
       borderRadius: 50,
   }
});
export default Test;
