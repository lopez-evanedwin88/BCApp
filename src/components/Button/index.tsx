import React, {FunctionComponent} from 'react';
import {ButtonProps, StyleProp, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface CustomButtonProps extends ButtonProps {
  onPress: () => void;
  title: string;
  style?: StyleProp<any>;
  textStyle?: StyleProp<any>;
}

const Button: FunctionComponent<CustomButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
