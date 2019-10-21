import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationStackProp } from 'react-navigation-stack';

import { colors, SCREEN_WIDTH } from '../../constants'
import { Button, Input } from '../../reusables';

import Style from './style';

interface Props {
    navigation: NavigationStackProp<{}>;
}

export default class SignUp extends Component<Props, {}>{
    render() {
        const { navigation } = this.props
        const inputFieldStyle = StyleSheet.flatten([{ borderColor: colors.blue, marginBottom: 10, width: SCREEN_WIDTH - 40 }])
        const upperFieldStyle = StyleSheet.flatten([inputFieldStyle, { width: SCREEN_WIDTH / 2 - 25 }])

        return (
            <KeyboardAwareScrollView contentContainerStyle={Style.container}>
                <TouchableOpacity style={Style.topHeader} onPress={() => navigation.goBack()}>
                    <Text style={Style.headerText}>Back</Text>
                </TouchableOpacity>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <View style={Style.upperFieldContainer}>
                        <Input placeholder="User name..." style={upperFieldStyle} />
                        <Input placeholder="Gender..." style={upperFieldStyle} />
                    </View>
                    <Input placeholder="Email..." style={inputFieldStyle} />
                    <Input placeholder="Password..." style={inputFieldStyle} />
                    <Button color={colors.purple} text="SIGN UP" width={SCREEN_WIDTH - 40} onPress={() => navigation.navigate('Feed')} />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
