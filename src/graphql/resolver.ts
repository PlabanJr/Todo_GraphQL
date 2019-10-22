import gql from 'graphql-tag';

interface UserInfo {
    id?: string
    password: string
    email: string
    fullname: string
    deviceId?: string
    gender?: string
}

export const SIGN_UP = gql`
    mutation SingUpResult($user: UserInfo!){
        signUp(user: $user){
            email
            fullname
            deviceId
            gender
            token
        }
    }`

export const LOGIN_USER = gql`
    mutation LoginResult($email: String!, $password: String!){
        login(email: $email, password: $password){
            email
            fullname
            deviceId
            gender
            token
        }
    }`