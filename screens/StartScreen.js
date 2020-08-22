import React from 'react';
import {View, Text , StyleSheet , Alert} from 'react-native';

import Button from '../components/Button'


const exitHandler = () =>{
    Alert.alert(
        "Alert",
        "Doriti sa inchideti aplicatia ?",
        [
            {
                text:'Da',
                onPress : ( ) => console.log("Daa")
            },
            {
                text:'NU',
                onPress : ( ) => console.log("NU")
            }
        ]
    )
}
const StartScreen = props =>{

    return(
        <View  style={styles.container}>
            <Text style = {styles.text}> Start Screen  </Text>
            <View style ={styles.buttonsContainer}>
                
                <Button title=" Start"  onSelect ={() =>{
                    props.navigation.navigate({routeName : 'GameScreen'})
                }}/>
                
                <Button title="Options" onSelect ={() =>{
                     props.navigation.navigate({routeName : 'OptionsScreen'})
                }}/>
                
                <Button title="Exit"  onSelect ={exitHandler}/>

            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    text:{
        fontSize:18,
        paddingVertical :10
    },
    buttonsContainer:{
        flexDirection:'column'
    }
})


export default StartScreen;