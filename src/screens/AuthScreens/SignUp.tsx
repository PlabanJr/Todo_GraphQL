import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { colors, SCREEN_WIDTH } from '../../constants'
import { Button, Input } from '../../reusables';

import Style from './style';

export default class SignUp extends Component {
    render() {
        const inputFieldStyle = StyleSheet.flatten([{ borderColor: colors.blue, marginBottom: 10, width: SCREEN_WIDTH - 40 }])
        const upperFieldStyle = StyleSheet.flatten([inputFieldStyle, { width: SCREEN_WIDTH / 2 - 25 }])

        return (
            <KeyboardAwareScrollView contentContainerStyle={Style.container}>
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
                    <Button color={colors.purple} text="SIGN UP" width={SCREEN_WIDTH - 40} />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
