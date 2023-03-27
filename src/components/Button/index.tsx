import React, {FunctionComponent} from 'react';
import {ButtonProps, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface CustomButtonProps extends ButtonProps {
  onPress: () => void;
  title: string;
}

const Button: FunctionComponent<CustomButtonProps> = ({
  onPress,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity {...props} onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
