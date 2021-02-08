import React from 'react';
import {Text} from 'react-native';
import {LinkText} from './styles';
import {useNavigation} from '@react-navigation/native';

interface LinkNavigationProps {
  text: string;
  to: string;
}

const LinkNavigation = ({text, to}: LinkNavigationProps) => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate(to);
  };

  return (
    <LinkText onPress={navigate}>
      <Text style={{fontSize: 15, color: '#2f3191'}}>{text}</Text>
    </LinkText>
  );
};

export default LinkNavigation;
