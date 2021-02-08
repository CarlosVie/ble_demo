import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Touchable} from './styles';

interface ButtonOpacityProps {
  onPress: () => void;
  title: string;
  color?: string;
  textColor?: string;
  margin?: number;
}

const ButtonOpacity = ({
  onPress,
  title,
  color,
  textColor,
  margin,
}: ButtonOpacityProps) => {
  return (
    <>
      <Touchable
        onPress={onPress}
        style={{
          backgroundColor: color !== undefined ? color : '#2f3191',
          margin: margin !== undefined ? margin : undefined,
        }}>
        <Text style={{color: textColor !== undefined ? textColor : 'white'}}>
          {title}
        </Text>
      </Touchable>
    </>
  );
};

export default ButtonOpacity;
