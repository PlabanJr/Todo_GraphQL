import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Style from './style';

const SCREEN_WIDTH = Dimensions.get('screen').width

export default class SignUp extends Component {
    render() {
        const inputFieldStyle = StyleSheet.flatten([Style.inputFields, { borderColor: '#1089ff', }])
        const upperFieldStyle = StyleSheet.flatten([inputFieldStyle, { width: SCREEN_WIDTH / 2 - 25 }])

        return (
            <KeyboardAwareScrollView contentContainerStyle={Style.container}>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <View style={Style.upperFieldContainer}>
                        <TextInput placeholder="User name..." style={upperFieldStyle} />
                        <TextInput placeholder="Gender..." style={upperFieldStyle} />
                    </View>
                    <TextInput placeholder="Email..." style={inputFieldStyle} />
                    <TextInput placeholder="Password..." style={inputFieldStyle} />
                    <TouchableOpacity style={[Style.button, { backgroundColor: '#bc5090' }]}>
                        <Text style={Style.buttonText}> SIGN UP </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
