import React, { Component } from 'react'
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native'
import Swipeable from 'react-native-swipeable';

import { colors } from '../../../constants';

interface Props {
    item: { text: string, status: string }
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
        const { item } = this.props
        let status = this.getStatusText(item.status);
        const rightButtons = [
            <TouchableHighlight style={Style.button}>
                <Text style={[Style.buttonText, { color: 'green', }]} >Done</Text>
            </TouchableHighlight>,
            <TouchableHighlight style={Style.button}>
                <Text style={[Style.buttonText, { color: '#ff0000', }]}>Delete</Text>
            </TouchableHighlight>
        ];



        return (
            <Swipeable rightButtons={rightButtons} style={Style.container}>
                <Text style={Style.text}>{item.text} </Text>
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
