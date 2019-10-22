import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { colors, SCREEN_WIDTH } from '../../constants';
import { Button } from '../../reusables';

import Style from './style';

interface Props {
    navigation: NavigationStackProp<{}>;
}

export default class SplashScreen extends Component<Props, {}> {
    handleOnPress = (route: string) => {
        this.props.navigation.navigate(route)
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={Style.container}>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <Button text="LOGIN" color={colors.blue} width={SCREEN_WIDTH / 2 - 30} onPress={() => this.handleOnPress('Login')} />
                    <Button text="SIGN UP" color={colors.purple} width={SCREEN_WIDTH / 2 - 30} onPress={() => this.handleOnPress('SignUp')} />
                </View>
            </View>
        )
    }
}


