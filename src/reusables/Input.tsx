import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface Props {
    placeholder: string,
    style: object
}

export default class Input extends Component<Props, {}> {

    render() {
        return (
            <TextInput {...this.props} style={[Style.inputField, this.props.style]} />
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
