import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  margin: 5px;
`;

export const DevicesView = styled(View)`
  align-items: center;
`;

export const DeviceList = styled(View)`
  align-items: center;
  top: 10px;
  width: 100%;
`;
