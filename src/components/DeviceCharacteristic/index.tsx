import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

  function isByteArray(array) {
    if (array && array.byteLength !== undefined) return true;
    return false;
  }

  function convertToHex(hexString: any) {
    var result = [];
    while (hexString.length >= 2) {
      result.push(parseInt(hexString.substring(0, 2), 16));
      hexString = hexString.substring(2, hexString.length);
    }
    return result;
  }

  const read = () => {
    let service;

    if (!isByteArray(characteristc.service)) {
      service = convertToHex(characteristc.service);
    } else {
      service = characteristc.service;
    }

    console.log('SERVICE => ', service);

    BleManager.read(deviceId, service, characteristc.characteristic)
      .then((readData: any) => {
        // Success code
        const buffer = Buffer.Buffer.from(readData);
        console.log('Read: ' + buffer);
        setData(buffer);
      })
      .catch((error) => {
        // Failure code
        console.log('ERROR: ', error);
      });
  };

  const write = () => {
    const stringData = stringToBytes('TEST');
    BleManager.write(
      deviceId,
      characteristc.service,
      characteristc.characteristic,
      data,
    )
      .then(() => {
        // Success code
        console.log('Write: ' + stringData);
      })
      .catch((error) => {
        // Failure code
        console.log(error);
      });
  };

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
        <View style={{flexDirection: 'row'}}>
          <Tag>Properties: </Tag>
          {characteristc.properties.map((pr) => {
            return (
              <View key={pr}>
                <Text>{pr} </Text>
              </View>
            );
          })}
        </View>
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
      {data ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default DeviceCharacteristc;
