import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { colors, SCREEN_WIDTH, } from '../../constants'
import { Button, Input } from '../../reusables'

import Style from './style';

export default class Login extends Component {
    render() {
        const inputFieldStyle = StyleSheet.flatten([{ borderColor: colors.purple, marginBottom: 10, width: SCREEN_WIDTH - 40 }])

        return (
            <KeyboardAwareScrollView contentContainerStyle={Style.container}>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <Input placeholder="Email..." style={inputFieldStyle} />
                    <Input placeholder="Password..." style={inputFieldStyle} />
                    <Button color={colors.blue} text="LOGIN" width={SCREEN_WIDTH - 40} />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
