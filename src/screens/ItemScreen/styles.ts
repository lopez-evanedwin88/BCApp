import {StyleSheet} from 'react-native';
import {fonts} from '../../styles/Base';
import globalStyles from '../../styles/GlobalStyles';

const styles = StyleSheet.create({
  txtInputStyleView: {
    ...globalStyles.paddingVertical4,
  },
  txtInputStyle: {
    marginHorizontal: 16,
    borderBottomWidth: 0.3,
    flex: 1,
    fontSize: fonts.xlg,
  },
  imageStyle: {
    flex: 0.1,
  },
});

export default styles;
