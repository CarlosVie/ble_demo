import React from 'react';
import {Modal, View, Text} from 'react-native';
import {Characteristics} from '../../ble/types';

interface ModalProps {
  visible: boolean;
  onRequestClose: () => void;
  characterisct: Characteristics;
}

const WhiteValueModal = ({
  visible,
  onRequestClose,
  characterisct,
}: ModalProps) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onRequestClose}>
      <View style={{backgroundColor: 'red'}}>
        <Text>{characterisct.characteristic}</Text>
      </View>
    </Modal>
  );
};

export default WhiteValueModal;
