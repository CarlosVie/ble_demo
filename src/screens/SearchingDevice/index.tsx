import React, {useEffect} from 'react';
import TitleRC from '../../components/TitleRC';
import {
  Container,
  SearchView,
  LoadView,
  BluetoohImage,
  InfoText,
  ContactInfo,
  ContactView,
  CancelView,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import SubTitlesRC from '../../components/SubTitleRC';
import {enableBluetooth, scanDevices, stopScan} from '../../ble';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {Platform} from 'react-native';

const image = require('../../../assets/bluetooth.png');
const info = 'if you experience errors please contact';
const infoS = 'AirCycle suppor:';

const SearchingDevice = () => {
  const navigation = useNavigation();
  let timeout;
  const navigate = async () => {
    navigation.navigate('FoundDevice');
  };

  const cancel = () => {
    clearTimeout(timeout);
    navigation.navigate('Home');
  };

  useEffect(() => {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      enableBluetooth();
    }
    scanDevices();
    timeout = setTimeout(() => {
      stopScan();
      navigate();
    }, 3000);
  }, []);

  return (
    <Container>
      <TitleRC title={'Device Setup'} />
      <SearchView>
        <SubTitlesRC title={'Searching for Device...'} />
        <LoadView>
          <BluetoohImage source={image} />
          <ActivityIndicator />
        </LoadView>
        <InfoText>{info}</InfoText>
        <InfoText>{infoS}</InfoText>
        <ContactView>
          <ContactInfo>support@aircycle.com</ContactInfo>
          <ContactInfo>1 (877) 326-2668</ContactInfo>
        </ContactView>
        <CancelView>
          <TouchableOpacity onPress={cancel}>
            <Text style={{color: '#2f3191', fontSize: 15}}>Cancel</Text>
          </TouchableOpacity>
        </CancelView>
      </SearchView>
    </Container>
  );
};

export default SearchingDevice;
