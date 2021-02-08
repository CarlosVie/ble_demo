import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {block} from 'react-native-reanimated';
import {Characteristics, Device} from '../../ble/types';
import DeviceCharacteristc from '../DeviceCharacteristic';
import TitleRC from '../TitleRC';

interface DeviceInfoProps {
  device: Device;
}

const DeviceInfo = ({device}: DeviceInfoProps) => {
  return (
    <View>
      <View style={{height: '90%', alignItems: 'center'}}>
        <TitleRC title={device.name} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>UUID: </Text>
          <Text>{device.id}</Text>
        </View>
        <ScrollView>
          {device.characteristics.map((ch: Characteristics) => {
            return (
              <DeviceCharacteristc
                key={ch.characteristic}
                deviceId={device.id}
                characteristc={ch}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default DeviceInfo;
