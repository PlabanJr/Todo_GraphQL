import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface Props {
    onChangeText: (text: string) => void,
    placeholder: string,
    style: object,
    value?: string
    secureTextEntry?: boolean
}

export default class Input extends Component<Props, {}> {

    render() {
        return (
            <TextInput onChangeText={this.props.onChangeText} {...this.props} style={[Style.inputField, this.props.style]} />
        )
    }
}

const Style = StyleSheet.create({
    inputField: {
        borderRadius: 6,
        borderWidth: 1,
        padding: 10,
    }
})
