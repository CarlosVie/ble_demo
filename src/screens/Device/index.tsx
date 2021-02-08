import React, {useEffect, useState} from 'react';
import BleManager from 'react-native-ble-manager';
import {TouchableOpacity} from 'react-native';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Device} from '../../ble/types';
import DeviceInfo from '../../components/DeviceInfo';
const arrow = require('../../../assets/left-arrow.png');

const ConnectDevice = (props: any) => {
  const navigation = useNavigation();
  const [device, setDevice] = useState<Device>();
  const navigate = () => {
    BleManager.disconnect(props.route.params.device.id);
    navigation.navigate('FoundDevice');
  };

  useEffect(() => {
    BleManager.connect(props.route.params.device.id)
      .then(() => {
        console.log('Connected');
        BleManager.retrieveServices(props.route.params.device.id)
          .then((peripheralData: Device) => {
            setDevice(peripheralData);
          })
          .catch((error) => {
            console.log(error);
            navigation.navigate('FoundDevice');
          });
      })
      .catch((error) => {
        console.log(error);
        navigation.navigate('FoundDevice');
      });
  }, []);

  return (
    <>
      <SafeAreaView style={{padding: 5}}>
        <TouchableOpacity onPress={navigate}>
          <Image source={arrow} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          {device ? (
            <DeviceInfo device={device} />
          ) : (
            <View>
              <Text>Connecting...</Text>
              <ActivityIndicator size={20} />
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default ConnectDevice;
