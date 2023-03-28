import React, {FunctionComponent} from 'react';
import {ButtonProps, StyleProp, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface CustomButtonProps extends ButtonProps {
  onPress: () => void;
  title: string;
  style?: StyleProp<any>;
}

const Button: FunctionComponent<CustomButtonProps> = ({
  onPress,
  title,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
