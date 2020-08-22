import React from 'react';
import { View, Text , TouchableOpacity , StyleSheet } from 'react-native';


const Button = props => {
    return(
        <View  style ={styles.button}>
            <TouchableOpacity onPress ={props.onSelect}>
                <View style = {styles.buttonHeader}>
                    <View style ={styles.titleContainer}>
                        <Text> {props.title} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        height: 100,
        width: 250,
        backgroundColor:'#f5f5f5',
        borderRadius :10,
        overflow:'hidden'
    },
    buttonHeader:{
        height:"90%"
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.4)',
        paddingVertical: 10,
        paddingHorizontal :12,
        alignItems:'center'
    },
    title:{
        fontSize: 25,
        color:'white',
        textAlign:'center',
        alignItems:'center'
    }
})

export default Button;