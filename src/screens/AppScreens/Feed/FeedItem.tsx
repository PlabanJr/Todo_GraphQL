import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-swipeable';

import { colors } from '../../../constants';
import { TodoItem } from "../../../types";
import { thisTypeAnnotation } from '@babel/types';

interface Props {
    item: TodoItem
    handleDelete: (id: string) => void
    handleDone: (id: TodoItem) => void
}

export default class FeedItem extends Component<Props, {}> {
    getStatusText = (status: string) => {
        let statusText = '';
        let color = '';

        switch (status) {
            case 'IN_PROGRESS':
                statusText = 'In progress'
                color = colors.inPrgressColor
                break;
            case 'PENDING':
                statusText = 'Pending'
                color = colors.pendingColor
                break;
            case 'COMPLETED':
                statusText = 'Completed'
                color = colors.doneColor
                break;
        }

        return { color: color, status: statusText }
    }

    render() {
        const { item, handleDelete, handleDone } = this.props
        const { id } = item
        let status = this.getStatusText(item.completed);
        const rightButtons = [
            <TouchableOpacity style={Style.button} onPress={() => handleDone(item)}>
                <Text style={[Style.buttonText, { color: colors.pendingColor, }]} >Done</Text>
            </TouchableOpacity>,
            <TouchableOpacity style={Style.button} onPress={() => handleDelete(id)}>
                <Text style={[Style.buttonText, { color: colors.doneColor, }]}>Delete</Text>
            </TouchableOpacity>
        ];

        return (
            <Swipeable rightButtons={rightButtons} style={Style.container}>
                <Text style={Style.text}>{item.title} </Text>
                <Text style={[Style.status, { color: status.color }]}>{status.status} </Text>
            </Swipeable >
        )
    }
}

const Style = StyleSheet.create({
    button: {
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10
    },
    buttonText: {
        alignItems: 'center',
        fontWeight: '300'
    },
    container: {
        width: "100%",
        borderTopWidth: 1,
        borderColor: colors.whiteOne,
        paddingVertical: 10,
        paddingLeft: 10
    },
    status: {
        fontSize: 10,
        fontWeight: '300'
    },
    text: {
        color: colors.blackOne,
        fontSize: 18,
        paddingBottom: 2,
    }
})
