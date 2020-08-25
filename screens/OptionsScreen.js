import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Slider } from 'react-native';
import { CheckBox } from "native-base"












const OptionsScreen = props => {
    const [playStatus, SetPlayStatus] = useState("nosound");
    const [isChecked, setIsChecked] = useState(false);


    return (
        <View style={styles.container}>
            <Text style={styles.text}> Options</Text>
            <View style={styles.musicContainer}>
                <Text style={styles.text}> Music</Text>
                <Slider
                    minimumValue={1}
                    maximumValue={7}
                    minimumTrackTintColor="#1EB1FC"
                    maximumTractTintColor="green"
                    step={1}
                    value={4}
                    onValueChange={() => { }}
                    style={styles.slider}
                    thumbTintColor="#1EB1FC"
                />



            </View>
            <View style={styles.soundContainer}>
                <Text style={styles.text} >Sound:</Text>
                <Slider
                    minimumValue={1}
                    maximumValue={7}
                    minimumTrackTintColor="#1EB1FC"
                    maximumTractTintColor="green"
                    step={1}
                    value={4}
                    onValueChange={() => { }}
                    style={styles.slider}
                    thumbTintColor="#1EB1FC"
                />
            </View>
            <View style={styles.muteContainer}>
                <Text style={styles.text}> Mute:</Text>
                <CheckBox checked={isChecked} color="#fc5185" onPress={() => setIsChecked(!isChecked)} size="10" />
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        fontSize: 30
    },
    musicContainer: {
        width: "100%",
        marginHorizontal: '10%',
        paddingHorizontal: '10%',
        paddingVertical: 40
    },
    soundContainer: {
        width: "100%",
        marginHorizontal: '10%',
        paddingHorizontal: '10%',
        paddingVertical: 40

    },
    muteContainer: {
        width: "100%",
        flexDirection: 'row',
        paddingHorizontal: '10%',
        marginHorizontal: '10%'

    },
    slider: {
        width: '80%'
    }
})


export default OptionsScreen;