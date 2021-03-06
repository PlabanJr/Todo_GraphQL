import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

interface Props {
    color: string,
    onPress?: () => void,
    text: string,
    width?: number,
}

export default class Button extends Component<Props, {}> {
    render() {
        const { color, onPress, text, width } = this.props
        return (
            <TouchableOpacity style={[Style.button, { backgroundColor: color, width: width }]} onPress={onPress}>
                <Text style={Style.buttonText}> {text} </Text>
            </TouchableOpacity>
        )
    }
}

const Style = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 6,
        padding: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
})