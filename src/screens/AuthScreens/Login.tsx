import React, { Component } from 'react'
import { withApollo } from "react-apollo";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationStackProp } from 'react-navigation-stack';

import { colors, SCREEN_WIDTH, } from '../../constants'
import { Button, Input } from '../../reusables'
import { LOGIN_USER } from "../../graphql/resolver";

import Style from './style';
import { thisTypeAnnotation } from '@babel/types';

interface Props {
    navigation: NavigationStackProp<{}>;
    client: any
}

class Login extends Component<Props, {}>{
    state = {
        email: '',
        password: ''
    }

    handleLogin = async () => {
        const { email, password } = this.state;

        if (!email && !password) return;

        await this.props.client.mutate({
            mutation: LOGIN_USER,
            variables: {
                email: email,
                password: password
            }
        })
            .then((res: any) => {
                console.log(res)
                this.props.navigation.navigate('Feed')
            })
            .catch((err: any) => {
                console.log(err)
            })

    }

    render() {
        const { navigation } = this.props
        const { email, password } = this.state;
        const inputFieldStyle = StyleSheet.flatten([{ borderColor: colors.purple, marginBottom: 10, width: SCREEN_WIDTH - 40 }])

        return (
            <KeyboardAwareScrollView contentContainerStyle={Style.container}>
                <TouchableOpacity style={Style.topHeader} onPress={() => navigation.goBack()}>
                    <Text style={Style.headerText}>Back</Text>
                </TouchableOpacity>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <Input placeholder="Email..." style={inputFieldStyle} value={email} onChangeText={(email) => this.setState({ email })} />
                    <Input placeholder="Password..." style={inputFieldStyle} value={password} onChangeText={(password) => this.setState({ password })} />
                    <Button color={colors.blue} text="LOGIN" width={SCREEN_WIDTH - 40} onPress={() => this.handleLogin()} />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

export default withApollo<Props, {}>(Login)