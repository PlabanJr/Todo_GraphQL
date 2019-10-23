import React, { Component } from 'react'
import { withApollo } from "react-apollo";
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationStackProp } from 'react-navigation-stack';

import { colors, SCREEN_WIDTH, } from '../../constants'
import { Button, Input } from '../../reusables'
import { LOGIN_USER } from "../../graphql/resolver";
import createClient from "../../graphql/client";
import { loginService } from "../../utils";

import Style from './style';

interface Props {
    navigation: NavigationStackProp<{}>;
    client: any
}

class Login extends Component<Props, {}>{
    state = {
        email: '',
        loading: false,
        password: ''
    }

    handleLogin = async () => {
        const { email, password } = this.state;

        if (!email) {
            Alert.alert('Please enter a valid email!')
            return
        }

        if (!password) {
            Alert.alert('Password cannot be empty!')
            return
        }

        this.setState({ loading: true })

        if (!email && !password) return;

        await this.props.client.mutate({
            mutation: LOGIN_USER,
            variables: {
                email: email,
                password: password
            }
        })
            .then((res: any) => {
                this.setState({ loading: false })
                let token = res.data.login.token;
                let userName = res.data.login.fullname;
                loginService(token, userName)
                let client = createClient()
                this.props.navigation.navigate('Feed')
            })
            .catch((err: any) => {
                console.log(err);
                this.setState({ loading: false })
                Alert.alert("Login failed! Please try again.")
            })

    }

    render() {
        const { navigation } = this.props
        const { email, loading, password } = this.state;
        const inputFieldStyle = StyleSheet.flatten([{ borderColor: colors.purple, marginBottom: 10, width: SCREEN_WIDTH - 40 }])
        const lodingStyle = StyleSheet.flatten([Style.loading, { backgroundColor: colors.blue }])

        return (
            <KeyboardAwareScrollView contentContainerStyle={Style.container}>
                <TouchableOpacity style={Style.topHeader} onPress={() => navigation.goBack()}>
                    <Text style={Style.headerText}>Back</Text>
                </TouchableOpacity>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <Input placeholder="Email..." style={inputFieldStyle} value={email} onChangeText={(email) => this.setState({ email: email.toLowerCase() })} />
                    <Input secureTextEntry={true} placeholder="Password..." style={inputFieldStyle} value={password} onChangeText={(password) => this.setState({ password })} />
                    {loading ? <ActivityIndicator style={lodingStyle} /> : <Button color={colors.blue} text="LOGIN" width={SCREEN_WIDTH - 40} onPress={() => this.handleLogin()} />}

                </View>
            </KeyboardAwareScrollView>
        )
    }
}

export default withApollo<Props, {}>(Login)