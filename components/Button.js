import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Button = props => {
    return (
        <View style={styles.button}>
            <TouchableOpacity style={styles.submit} onPress={props.onSelect}>
                <Text style={{ color: "white" }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
{/* <TouchableOpacity style={styles.submit} onSelect={() => {
    props.navigation.navigate({ routeName: 'GameScreen' })
}}>
    <Text style={{ color: "white" }}>Start</Text>
</TouchableOpacity> */}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        

        
    },
    submit: {
        width: "80%",
        backgroundColor: "#fc5185",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        marginTop: "25%",
        height:50
    },

})

export default Button;