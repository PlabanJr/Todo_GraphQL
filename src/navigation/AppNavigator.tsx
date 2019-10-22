import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import { AuthLoading, Login, SignUp, Feed, SplashScreen } from '../screens';

const AuthStack = createStackNavigator(
    {
        SplashScreen: SplashScreen,
        Login: Login,
        SignUp: SignUp,
    },
    {
        headerMode: "none",
        initialRouteName: 'SplashScreen'
    }
)

const AppStack = createStackNavigator(
    {
        Feed: Feed
    },
    {
        headerMode: 'none'
    }
)

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading,
            AuthStack,
            AppStack,
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
)