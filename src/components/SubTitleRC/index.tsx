import React from 'react';
import {Text} from 'react-native';

interface SubTitlesProps {
  title: string;
  color?: string;
  size?: number;
  bold?: boolean;
}

const SubTitlesRC = ({title, color, size, bold}: SubTitlesProps) => {
  return (
    <Text
      style={{
        color: color !== undefined ? color : '#323743',
        fontSize: size ? size : 20,
        fontWeight: bold ? 'bold' : 'normal',
      }}>
      {title}
    </Text>
  );
};

export default SubTitlesRC;
