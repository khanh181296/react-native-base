import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const OptiosnMenu = props => {
  return (
    <Modal
      hasBackdrop
      visible={props.modalVisible}
      backdropOpacity={0.5}
      deviceHeight={Dimensions.get('screen').height}
      deviceWidth={Dimensions.get('screen').width}>
      <View
        style={{
          width: '100%',
          padding: 20,
          backgroundColor: 'skyblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => props.hideModal('MainDetailsScreen')}>
          <Text>Xem Chi Tiết</Text>
        </TouchableOpacity>
        <TouchableOpacity onLongPress={() => props.hideModal()}>
          <Text>Xem Lịch Khám</Text>
        </TouchableOpacity>
        <TouchableOpacity onLongPress={() => props.hideModal()}>
          <Text>Cập nhật lịch khám</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default OptiosnMenu;