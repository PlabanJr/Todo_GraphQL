import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export default StyleSheet.create({
  appName: {
    color: colors.appColor,
    fontSize: 60,
  },
  button: {
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
  },
  buttonText: {
    color: colors.white,
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
