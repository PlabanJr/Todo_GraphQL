import { StyleSheet } from 'react-native';

import { colors, SCREEN_WIDTH } from '../../constants';


export default StyleSheet.create({
    appName: {
        color: colors.appColor,
        fontSize: 60,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    footer: {
        alignItems: 'center',
        flex: 2,
    },
    header: {
        alignItems: 'center',
        flex: 4,
        justifyContent: 'center',
    },
    loading: {
        alignItems: 'center',
        borderRadius: 6,
        padding: 10,
        width: SCREEN_WIDTH - 40
    },
    topHeader: {
        paddingLeft: 20
    },
    headerText: {
        color: colors.blue
    },
    upperFieldContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: SCREEN_WIDTH - 35
    }
});
