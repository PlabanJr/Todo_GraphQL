import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../constants'

interface Props {
    title: string
}

export default class Header extends Component<Props, {}> {
    render() {
        const { title } = this.props

        return (
            <View style={Style.header}>
                <Text style={Style.headerText}> {title} </Text>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    header: {
        backgroundColor: colors.headerColor,
        justifyContent: 'center',
        padding: 10,
        paddingLeft: 10
    },
    headerText: {
        color: colors.white,
        fontSize: 30
    }
})