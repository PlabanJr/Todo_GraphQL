import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { colors } from '../constants'
import { logOutService } from '../utils'
import { client } from "../graphql/client";

interface Props {
    title: string
    navigation: NavigationStackProp<{}>;
}

export default class Header extends Component<Props, {}> {
    handleLogout = async () => {
        await logOutService()
            .then(() => {
                client.resetStore()
                this.props.navigation.navigate('AuthLoading')
            })
    }

    render() {
        const { title } = this.props

        return (
            <View style={Style.header}>
                <Text style={Style.headerText}> {title} </Text>
                <TouchableOpacity onPress={() => this.handleLogout()}>
                    <Text style={Style.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: colors.headerColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 10
    },
    headerText: {
        color: colors.white,
        fontSize: 30
    },
    logoutText: {
        fontSize: 15,
        fontWeight: "600",
        color: colors.white
    }
})