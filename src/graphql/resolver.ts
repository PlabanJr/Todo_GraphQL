import gql from 'graphql-tag';

interface UserInfo {
    id?: string
    password: string
    email: string
    fullname: string
    deviceId?: string
    gender?: string
}

enum CompletedEnum {
    PENDING,
    COMPLETED,
    IN_PROGRESS
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

export const ADD_TODO = gql`
    mutation Todo($title: String!, $completed: CompletedEnum!) {
        createTodo(input: {title: $title, completed: $completed}){
            id
			title
			completed
			owner_id
			ollaborater_ids
        }
}
`