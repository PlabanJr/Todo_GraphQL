import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Style from './style';

export default class Login extends Component {
    render() {
        const inputFieldStyle = StyleSheet.flatten([Style.inputFields, { borderColor: '#bc5090', }])

        return (
            <KeyboardAwareScrollView contentContainerStyle={Style.container}>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <TextInput placeholder="Email..." style={inputFieldStyle} />
                    <TextInput placeholder="Password..." style={inputFieldStyle} />
                    <TouchableOpacity style={[Style.button, { backgroundColor: '#1089ff' }]}>
                        <Text style={Style.buttonText}> LOGIN </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
