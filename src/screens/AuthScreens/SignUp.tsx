import React, { Component } from 'react'
import { withApollo } from "react-apollo";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationStackProp } from 'react-navigation-stack';

import { colors, SCREEN_WIDTH } from '../../constants'
import { Button, Input } from '../../reusables';
import { SIGN_UP } from "../../graphql/resolver";
import { signUpService, validateUsername, validateGender, validateEmail, validatePassword } from "../../utils";

import Style from './style';

interface Props {
    navigation: NavigationStackProp<{}>;
    client: any
}

class SignUp extends Component<Props, {}>{
    state = {
        email: '',
        gender: '',
        password: '',
        userName: '',
    }



    handleSignUp = async () => {
        const { userName, gender, password, email } = this.state

        if (!validateUsername(userName)) {
            Alert.alert("User name is too short!")
            return;
        }

        if (!validateGender(gender)) {
            Alert.alert("Gender should be male or female!!")
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert("Please enter a correct email!")
            return;
        }

        if (!validatePassword(password)) {
            Alert.alert("Password is too short!")
            return;
        }

        const user = {
            fullname: userName,
            email: email,
            password: password,
            gender: gender,
        }

        await this.props.client.mutate({
            mutation: SIGN_UP,
            variables: {
                user: user
            }
        })
            .then((res: any) => {
                console.log(res, "Res")
                let token = res.data.signUp.token;
                let userName = res.data.signUp.fullname;

                signUpService(token, userName)
                this.props.navigation.navigate('Feed')
            })
            .catch((err: any) => {
                console.log(err, "err")
            })
    }

    render() {
        console.log(this.state, 'ikhgib')
        const { navigation } = this.props
        const { userName, gender, password, email } = this.state
        const inputFieldStyle = StyleSheet.flatten([{ borderColor: colors.blue, marginBottom: 10, width: SCREEN_WIDTH - 40 }])
        const upperFieldStyle = StyleSheet.flatten([inputFieldStyle, { width: SCREEN_WIDTH / 2 - 25 }])

        return (
            <KeyboardAwareScrollView contentContainerStyle={Style.container}>
                <TouchableOpacity style={Style.topHeader} onPress={() => navigation.goBack()}>
                    <Text style={Style.headerText}>Back</Text>
                </TouchableOpacity>
                <View style={Style.header}>
                    <Text style={Style.appName}>ToDo</Text>
                </View>
                <View style={Style.footer}>
                    <View style={Style.upperFieldContainer}>
                        <Input placeholder="User name..." style={upperFieldStyle} value={userName} onChangeText={(userName) => this.setState({ userName })} />
                        <Input placeholder="Gender..." style={upperFieldStyle} value={gender} onChangeText={(gender) => this.setState({ gender })} />
                    </View>
                    <Input placeholder="Email..." style={inputFieldStyle} value={email} onChangeText={(email) => this.setState({ email })} />
                    <Input placeholder="Password..." style={inputFieldStyle} value={password} onChangeText={(password) => this.setState({ password })} />
                    <Button color={colors.purple} text="SIGN UP" width={SCREEN_WIDTH - 40} onPress={() => this.handleSignUp()} />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

export default withApollo<Props, {}>(SignUp) 