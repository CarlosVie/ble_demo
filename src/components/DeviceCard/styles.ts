import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  padding: 5px;
  width: 100%;
  flex-direction: row;
  border-radius: 10px;
  background-color: red;
  margin: 10px;
  align-items: center;
`;

export const DeviceName = styled(Text)`
  font-size: 15px;
  padding: 30px;
  font-weight: bold;
  color: white;
`;

export const ContainerTouchable = styled(TouchableOpacity)`
  width: 90%;
  flex-direction: row;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
  background-color: #2f3191;
`;
