import React from 'react';
import { Platform}  from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors'
import GameScreen from '../screens/GameScreen';
import OptionsScreen from '../screens/OptionsScreen';
import StartScreen from '../screens/StartScreen';



const defaultStackNavOptions ={
    defaultNavigationOptions :{
        headerStyle :{
            backgroundColor :Platform.OS === 'ios' ? '1#F2025' : ""
        },
        headerTintColor : 'white'
    }
}

const ScreensNavigator = createStackNavigator({
    Start : {
        screen : StartScreen,
        navigationOptions:{
            headerTitle:'Start Screen',
            headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? '#1F2025' : Colors.primaryColor
            },
            headerTintColor  : 'white'
        }
    },
    GameScreen :{
        screen: GameScreen
    },
    OptionsScreen:{
        screen: OptionsScreen,
        navigationOptions:{
            headerTitle:'Options Screen',
            headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? '#1F2025' : Colors.primaryColor
            },
            headerTintColor  : 'white'
        }
    }
})

export default createAppContainer(ScreensNavigator);