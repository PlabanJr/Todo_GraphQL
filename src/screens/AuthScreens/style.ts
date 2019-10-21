import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width

export default StyleSheet.create({
    appName: {
        color: '#e688a1',
        fontSize: 60,
    },
    button: {
        alignItems: 'center',
        borderRadius: 6,
        padding: 10,
        width: SCREEN_WIDTH - 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
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
    inputFields: {
        borderRadius: 6,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: SCREEN_WIDTH - 40
    },
    upperFieldContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: SCREEN_WIDTH - 35
    }
});
