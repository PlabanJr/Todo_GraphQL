import gql from 'graphql-tag';

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
    mutation Todo($input: TodoInput!) {
        createTodo(input: $input){
            id
			title
			completed
			owner_id
			collaborater_ids
        }
    }`

export const LIST_TODOS = gql`
    query Todo {
        allMyTodos{
            id
			title
            completed
            owner_id
            collaborater_ids
        }
    }`

export const REMOVE_TODO = gql`
    mutation Todo($id: ID!) {
        deleteTodo(id: $id){
            id
			title
			completed
			owner_id
			collaborater_ids
        }
    }`

export const UPDATE_TODO = gql`
    mutation Todo($id: ID!, $input: TodoInput!) {
        updateTodo(id: $id, input: $input){
            id
			title
			completed
			owner_id
			collaborater_ids
        }
    }`

