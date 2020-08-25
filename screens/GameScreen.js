import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {CheckBox} from "native-base"



const GameScreen = props => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.screenContainer}>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        fontSize: 18
    }
})


export default GameScreen;