import {Dimensions, StyleSheet} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default StyleSheet.create({
  appName: {
    color: '#e688a1',
    fontSize: 60,
  },
  button: {
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
    width: SCREEN_WIDTH / 2 - 30,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
  },
});
