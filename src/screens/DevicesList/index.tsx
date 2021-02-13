import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import DeviceCard from '../../components/DeviceCard';
import BleManager from 'react-native-ble-manager';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Image,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {DevicesView, DeviceList, Container} from './styles';
import SubTitlesRC from '../../components/SubTitleRC';
import TitleRC from '../../components/TitleRC';
import {View} from 'react-native';
import {Device} from '../../ble/types';
const arrow = require('../../../assets/left-arrow.png');

const DevicesList = () => {
  const [list, setList] = useState<Device[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('Home');
  };

  const getDiscoverdDevices = () => {
    return new Promise((resolve, reject) => {
      BleManager.getDiscoveredPeripherals()
        .then((devices: any) => {
          setList(devices);
          setRefreshing(false);
          resolve(devices);
        })
        .catch((error) => {
          console.log('error fail: ', error);
          setRefreshing(false);
          reject(error);
        });
    });
  };

  const readDevices = () => {};

  const onRefresh = () => {
    setRefreshing(true);
    getDiscoverdDevices();
    readDevices();
  };

  useEffect(() => {
    getDiscoverdDevices();
  }, []);

  return (
    <Container>
      <TouchableOpacity onPress={navigate}>
        <Image source={arrow} />
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TitleRC title={'Device Setup'} />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {refreshing ? (
          <ActivityIndicator />
        ) : (
          <DevicesView>
            <DeviceList>
              {list.length > 0 ? (
                <View style={{width: '100%', alignItems: 'center'}}>
                  <SubTitlesRC title={'New Devices Detected:'} />
                  {list.map((device) => (
                    <DeviceCard device={device} key={device.id} />
                  ))}
                </View>
              ) : (
                <View>
                  <SubTitlesRC title={'Devices Not Found!'} />
                </View>
              )}
            </DeviceList>
          </DevicesView>
        )}
      </ScrollView>
    </Container>
  );
};

export default DevicesList;
