import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH, colors } from '../../../constants'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    feed: {
        flex: 1,
    },
    inputArea: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    headerText: {
        color: colors.blackOne,
        fontSize: 20,
    },
    listHeader: {
        backgroundColor: '#dff0ea',
        paddingVertical: 5,
        paddingLeft: 10,
    },
    listStyle: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: 'center',
    },
    textArea: {
        borderColor: colors.purple,
        fontSize: 16,
        marginRight: 10,
        paddingTop: 12,
        width: SCREEN_WIDTH - 100,
    }
})