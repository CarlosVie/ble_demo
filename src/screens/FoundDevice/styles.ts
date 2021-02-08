import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  flex: 1;
  margin: 5px;
`;

export const DevicesView = styled(View)`
  align-items: center;
`;

export const DeviceList = styled(View)`
  align-items: center;
  top: 30px;
  width: 100%;
`;
