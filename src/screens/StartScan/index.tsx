import React, {useEffect} from 'react';
import TitleRC from '../../components/TitleRC';
import {Container} from './styles';
import ButtonOpacity from '../../components/ButtonOpacity';
import {useNavigation} from '@react-navigation/native';
import {startBle} from '../../ble';

const StartScan = () => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('SearchingDevice');
  };

  useEffect(() => {
    startBle();
  }, []);

  return (
    <Container>
      <TitleRC title={'Start scan?'} />
      <ButtonOpacity title={'Scan'} onPress={navigate} margin={10} />
    </Container>
  );
};

export default StartScan;
