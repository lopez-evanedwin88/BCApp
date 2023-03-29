import {StyleSheet} from 'react-native';
import {color} from '../../styles/Base';

const styles = StyleSheet.create({
  button: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.blue,
  },
  text: {
    fontSize: 16,
    color: color.white,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});

export default styles;
