import React, {useEffect, useState} from 'react';
import {Device} from '../../ble/types';
import {ContainerTouchable, DeviceName} from './styles';
import {Image, Dimensions, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fan = require('../../../assets/fan.png');
interface DeviceCardProp {
  device: Device;
}

const DeviceCard = ({device}: DeviceCardProp) => {
  const navigation = useNavigation();
  const Link = () => {
    navigation.navigate('DeviceDetails', {device: device});
  };

  const getName = () => {
    if (device.name === undefined || device.name === null) return false;
    return true;
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
      {getName ? (
        <DeviceName>NO NAME</DeviceName>
      ) : (
        <DeviceName>{device.name}</DeviceName>
      )}
    </ContainerTouchable>
  );
};

export default DeviceCard;
