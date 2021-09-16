import { Modal,StyleSheet, } from"react-native";
import Info from"./info";
import React from"react";

export default class ModalElement extends React.Component{
    state={
        modalVisible:false,
    };

    setModalVisible(visible){
        this.setState({modalVisible:visible});
    }
    render(){

        return(
            <>
                <Modal
                    animationType = {"fade"}
                    transparent = {true}
                    style={styles.modal}
                    visible={this.state.modalVisible}
                    onRequestClose={()=>{}}>
                    <View style={styles.modal}>
                        <Text style={styles.close} onPress={()=>{
                            this.setModalVisible(false);
                        }}>
                            X
                        </Text>
                        <Info/>
                    </View>
                </Modal>

            </>
        );
    }
}

const styles = StyleSheet.create({
    modal:{
        flex:1,
        backgroundColor:"rgba(40,40,40,0.5)",
        width:"100%",
        height:"100%",
        paddingHorizontal:0,
    },

    close:{
        color:"#fff",
        fontSize:30,
        fontWeight:"bold",
        backgroundColor:"#003bff",
        top:2,
        left:10,
        position:"absolute",
        zIndex:10,
        textAlign:"center",
    },

});
