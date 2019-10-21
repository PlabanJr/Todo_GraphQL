import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import Style from './style';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <TouchableOpacity style={[Style.button, { backgroundColor: '#1089ff' }]}>
                        <Text style={Style.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Style.button, { backgroundColor: '#bc5090' }]}>
                        <Text style={Style.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


