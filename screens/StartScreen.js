import React,{useEffect} from 'react';
import {View, Text , StyleSheet , Alert,BackHandler} from 'react-native';
import RNCloseApp from 'react-native-close-app';
import RNExitApp from 'react-native-exit-app';




import Button from '../components/Button'



 
const StartScreen = props =>{
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => console.log("CLose the app")}
        ]);
        return true;
      };
   
    return(
        <View  style={styles.container}>

            <View style ={styles.buttonsContainer}>
                
                <Button title=" Start"  onSelect ={() =>{
                    props.navigation.navigate({routeName : 'GameScreen'})
                }}/>
                
                <Button title="Options" onSelect ={() =>{
                     props.navigation.navigate({routeName : 'OptionsScreen'})
                }}/>
                
                <Button title="Exit"  onSelect ={backAction}/>

            </View>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

        alignItems:"center",
        width:'100%',
        height:'100%',
        backgroundColor: '#fff',
        
        
    },
    buttonsContainer:{
        flexDirection:'column',
        width:'100%',
        
        height:'60%',
        marginTop:'30%'
    }
    // text:{
    //     fontSize:18,
    //     paddingVertical :10
    // },
    
})


export default StartScreen;