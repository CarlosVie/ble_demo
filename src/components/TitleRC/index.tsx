import React from 'react';
import {Title} from './styles';

interface TitleRCProps {
  title: string;
}

const TitleRC = ({title}: TitleRCProps) => {
  return <Title>{title}</Title>;
};

export default TitleRC;
