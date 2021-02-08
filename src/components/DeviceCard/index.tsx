import React from 'react';
import {Device} from '../../ble/types';
import {ContainerTouchable, DeviceName} from './styles';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const fan = require('../../../assets/fan.png');
interface DeviceCardProp {
  device: Device;
}

const DeviceCard = ({device}: DeviceCardProp) => {
  const navigation = useNavigation();

  const Link = () => {
    navigation.navigate('Device', {device: device});
  };

  return (
    <ContainerTouchable onPress={Link}>
      <Image
        source={fan}
        style={{
          width: 40,
          height: 40,
          margin: 10,
          tintColor: 'white',
        }}
      />
      {device.name === undefined ? (
        <DeviceName>NO NAME</DeviceName>
      ) : (
        <DeviceName>{device.name}</DeviceName>
      )}
    </ContainerTouchable>
  );
};

export default DeviceCard;
