import React, { Component } from 'react'
import { Text, View, FlatList, } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';

import { colors } from '../../../constants';
import { Header, Input, Button } from '../../../reusables';

import FeedItem from './FeedItem';
import Style from './style'

const data = [
    { text: 'buy milk', status: 'PENDING' },
    { text: 'buy milk', status: 'COMPLETED' },
    { text: 'buy milk', status: 'IN_PROGRESS' },
]

interface Props {
    navigation: NavigationStackProp<{}>;
}


export default class index extends Component<Props, {}> {
    renderHeader = (length: number) => {
        return length ? <Text style={Style.headerText}>Feed</Text> : null
    }

    render() {
        return (
            <View style={Style.container}>
                <Header title="ToDo" navigation={this.props.navigation} />
                <View style={Style.inputArea}>
                    <Input placeholder="Add task... " style={Style.textArea} />
                    <Button color={colors.appColor} text="Add" />
                </View>
                <View style={Style.feed}>
                    <FlatList
                        contentContainerStyle={data.length ? null : Style.listStyle}
                        bounces={false}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={() => <Text>Your feed is empty!</Text>}
                        ListHeaderComponent={data.length ? () => this.renderHeader(data.length) : null}
                        ListHeaderComponentStyle={Style.listHeader}
                        renderItem={({ item }) => <FeedItem item={item} />}
                    />
                </View>
            </View>
        )
    }
}
