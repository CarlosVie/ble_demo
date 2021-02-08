import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  top: 10%;
`;

export const SearchView = styled(View)`
  align-items: center;
  justify-content: center;
  top: 100px;
  width: 80%;
`;

export const SubTitle = styled(Text)`
  color: #323743;
  font-size: 20px;
`;

export const LoadView = styled(View)`
  align-items: center;
  width: 100%;
  height: 350px;
`;

export const BluetoohImage = styled(Image)`
  width: 150px;
  height: 150px;
  margin: 40px;
`;

export const InfoText = styled(Text)`
  font-weight: bold;
  font-size: 15px;
  font-style: italic;
`;

export const ContactView = styled(View)`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ContactInfo = styled(Text)`
  color: #323743;
  font-size: 12px;
`;

export const CancelView = styled(View)`
  right: 0%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  text-align: right;
`;
