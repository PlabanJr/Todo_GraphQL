import { find, remove } from "lodash";
import React, { Component } from 'react'
import { withApollo } from "react-apollo";
import { Text, View, FlatList, ActivityIndicator, Alert, } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { colors } from '../../../constants';
import { ADD_TODO, LIST_TODOS, REMOVE_TODO, UPDATE_TODO } from "../../../graphql/resolver";
import { Header, Input, Button } from '../../../reusables';
import { CompletedEnum, TodoItem } from "../../../types";

import FeedItem from './FeedItem';
import Style from './style'

interface Props {
    navigation: NavigationStackProp<{}>
    client: any
}

class Feed extends Component<Props, {}> {
    constructor(props: Props) {
        super(props)

        this.state = {
            loading: true,
            text: '',
            todoList: []
        }

        this.fetchTodos()
    }

    fetchTodos = async () => {
        this.props.client.query({
            query: LIST_TODOS,
        }).then((res: any) => {
            const todoList = res.data.allMyTodos;
            this.setState({ todoList: todoList, loading: false })
        }).catch((err: any) => {
            console.log(err, "ERR")
            this.setState({ loading: false })
            Alert.alert('Loading Failed!')
        })
    }

    handleAddTodo = () => {
        const { text, todoList } = this.state

        if (text) {
            this.props.client.mutate({
                mutation: ADD_TODO,
                variables: {
                    input: {
                        title: text,
                        completed: CompletedEnum.IN_PROGRESS
                    }
                }
            }).then((res: any) => {
                let updatedTodos = [...todoList]
                let todoItem = res.data.createTodo

                updatedTodos.push(todoItem)
                this.setState({ text: '', todoList: updatedTodos })
            }).catch((err: any) => {
                console.log("Err", err)
            })
        }
    }

    handleDelete = (id: string) => {
        const { todoList } = this.state

        this.setState({ loding: true })
        this.props.client.mutate({
            mutation: REMOVE_TODO,
            variables: {
                id: id
            },
        }).then((res: any) => {
            let updatedTodos = [...todoList]
            remove(updatedTodos, function (obj: TodoItem) {
                return obj.id === id
            })

            this.setState({ loding: false, todoList: [...updatedTodos] })
        }).catch((err: any) => {
            console.log("Err", err)
        })
    }

    handleDone = (item: TodoItem) => {
        const { todoList } = this.state
        let status = '';

        if (item.completed === CompletedEnum.IN_PROGRESS) {
            status = CompletedEnum.COMPLETED
        }
        else {
            status = CompletedEnum.IN_PROGRESS
        }

        this.props.client.mutate({
            mutation: UPDATE_TODO,
            variables: {
                id: item.id,
                input: {
                    title: item.title,
                    completed: status
                }
            }
        }).then((res: any) => {
            let updatedTodos = [...todoList];
            let index = -1;
            find(updatedTodos, function (obj: TodoItem, idx: number) {
                index = idx
                return obj.id === item.id
            })

            updatedTodos[index].completed = status;
            this.setState({ text: '', todoList: [...updatedTodos] })
        }).catch((err: any) => {
            console.log("Err", err)
        })
    }

    handleLogOut = () => {
        this.setState({ todoList: [] })
    }

    renderHeader = (length: number) => {
        return length ? <Text style={Style.headerText}>Feed</Text> : null
    }

    render() {
        const { loading, text, todoList } = this.state

        return (
            <View style={Style.container}>
                <Header title="ToDo" navigation={this.props.navigation} handleLogout={this.handleLogOut} />
                <View style={Style.inputArea}>
                    <Input placeholder="Add task... " style={Style.textArea} value={text} onChangeText={(text) => this.setState({ text })} />
                    <Button color={colors.appColor} text="Add" onPress={this.handleAddTodo} />
                </View>
                <View style={loading ? Style.loading : Style.feed}>
                    {loading ?
                        <ActivityIndicator size="large" />
                        : <FlatList
                            contentContainerStyle={todoList.length ? null : Style.listStyle}
                            bounces={false}
                            data={todoList}
                            keyExtractor={(item, index) => index.toString()}
                            ListEmptyComponent={() => <Text>Your feed is empty!</Text>}
                            ListHeaderComponent={todoList.length ? () => this.renderHeader(todoList.length) : null}
                            ListHeaderComponentStyle={Style.listHeader}
                            renderItem={({ item }) => <FeedItem item={item} handleDelete={this.handleDelete} handleDone={this.handleDone} />}
                        />
                    }

                </View>
            </View>
        )
    }
}

export default withApollo<Props, {}>(Feed)