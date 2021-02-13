import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, Platform} from 'react-native';
import {Characteristics} from '../../ble/types';
import SubTitlesRC from '../SubTitleRC';
import BleManager from 'react-native-ble-manager';
import {Tag, Row} from './styles';
import {stringToBytes} from 'convert-string';
import Buffer from 'buffer';

interface DeviceCharacteristcProps {
  deviceId: string;
  characteristc: Characteristics;
}

const DeviceCharacteristc = ({
  deviceId,
  characteristc,
}: DeviceCharacteristcProps) => {
  const [data, setData] = useState<any>();
  const [value, onChangeText] = useState<string>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<boolean>(true);
  let property;

  const writing = (e: string) => {
    setError('');
    if (e) onChangeText(e);
  };

  const read = () => {
    console.log(characteristc.service);
    console.log(characteristc.characteristic);
    BleManager.read(
      deviceId,
      characteristc.service,
      characteristc.characteristic,
    )
      .then((readData: any) => {
        // Success code
        const buffer = Buffer.Buffer.from(readData); // read from byte array to string
        console.log('Read: ' + buffer);
        setData(buffer);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const write = () => {
    const stringData = stringToBytes(value); // need to pass from string to byte array
    BleManager.write(
      deviceId,
      characteristc.service,
      characteristc.characteristic,
      stringData,
    )
      .then(() => {
        console.log('Write: ' + stringData);
        setSuccess(false);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      const map: Map<string, string> = characteristc.properties;
      property = map.values;
      console.log('MAP => ', property);
    } else {
      property = characteristc.properties;
      console.log('STR => ', property);
    }
  }, []);

  return (
    <View style={{borderRadius: 5, margin: 3}}>
      <TouchableOpacity onPress={read}>
        <SubTitlesRC
          title={'Characteristic'}
          size={17}
          color={'#2f3191'}
          bold={true}
        />
        <Row>
          <Tag>uuid:</Tag>
          <Text>{characteristc.characteristic}</Text>
        </Row>
        <Row>
          <Tag>isNotifying:</Tag>
          <Text>{characteristc.isNotifying ? ' true' : ' false'}</Text>
        </Row>
        <Row>
          <Tag>service: </Tag>
          <Text>{characteristc.service}</Text>
        </Row>

        {characteristc.value ? (
          <View>
            <Text>{characteristc.value.CDVType}</Text>
            <Text>{characteristc.value.bytes}</Text>
            <Text>{characteristc.value.data}</Text>
          </View>
        ) : (
          <></>
        )}
      </TouchableOpacity>
      {error ? <Text style={{color: 'red'}}>{error}</Text> : <></>}
      {data && success ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={{
              backgroundColor: '#FFFFFF',
              width: '80%',
              height: 40,
              borderRadius: 10,
              padding: 5,
            }}
            onChangeText={(text: string) => writing(text)}
          />
          <TouchableOpacity
            onPress={write}
            style={{
              width: '80%',
              height: 40,
              backgroundColor: '#2f3191',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white'}}>White</Text>
          </TouchableOpacity>
          {error ? <Text style={{color: 'red'}}>{error}</Text> : <></>}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default DeviceCharacteristc;
