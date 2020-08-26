import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Button, Image } from 'react-native';
import { Container, Header, Content, DatePicker } from 'native-base';

import { useDispatch } from 'react-redux';


import { logout } from 'actions/userActions';
import { MAIN_SCREEN, HOSPITAL_QUALITY, MAIN_DETAILS_SCREEN } from 'constants/screens';
import strings from 'locale';
import useSession from 'hooks/useSession';
import styles from './styles';
import OptiosnMenu from './OptionsMenu';
import httpClient from 'httpClient';


const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const { token } = useSession();

  const callApi = async () => {
    try {
      const { data } = await httpClient.post(
        '/kb/dangkyonline/get-list',
        {},
        {
          headers: {
            'x-access-permission': `{ code: 'KB_DangKyKham', action: '_view' }`,
            'x-access-token':
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWRfY2FuYm8iOjEsImlkX2RvbnZpcyI6IjUzLDMsMjYsNDksNDYsNDMsNDEsNDAsNTIsNDIsNCw1NSwzNiwzMSwyNCw1MSwxMCwzMiwyMywyOSwyMSwyMiwyNSwyNywzMCwzNCwzMyw2LDgsOSw2Miw1Niw0NCw0NywxLDUsMjgsMzUsNyw1MCwxOSwxNSwxMSw0OCwxNiwxNCwxMywxMiwxOCwzOCwyMCwxNywzOSw1Nyw1OCw1NCw1OSw2MCwzNyw0NSw2Nyw2NCw2Niw2NSw2MyIsInJvbGVMZXZlbCI6bnVsbCwiY3VzdG9tZXJJZCI6MSwiaWRfZG9udmkiOjQwLCJpYXQiOjE1OTc5NDA5MTcsImV4cCI6MTYwMDUzMjkxN30.hL7w3m0XoGL-SPYFfxCWJuN44go03qHq0WZ5FIBr0y8',
          },
        },
      );

      console.log('data', data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log('call api');
    callApi();
  }, []);

  const renderItem = ({ item, index }) => {
    console.log('position', index);
    return (

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MainDetailsScreen');
        }}
        // onPress={() => {
        //   setShowModal(true);
        // }}
         style={{
         height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
        }}>
           <View style={{flex: 1}}>
            <Image
              source={require('../../assets/banners/banner_2.jpg')}
              resizeMode="cover"
              style={{
                height: '100%',
                width: '100%',
                alignSelf: 'center',
                borderRadius: 8,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
            />
          </View>
        <View style={{ flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff', }}>
          <Text>Họ tên: khanh duc</Text>
          <Text>SĐT: 0890484032</Text>
          <Text>Chuyên Khoa: Khám nội</Text>
          <Text>Ngày khám: 9:00 21/08/2020</Text>
        </View>
        {/* <View
          style={{
            // width: 100,
            backgroundColor: index % 2 === 0 ? 'green' : 'yellow',
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
          }}>
          <Text>{index % 2 === 0 ? 'Đã hẹn' : 'Chưa hẹn'}</Text>
        </View> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <View>
      <View>
        <Text>Từ Ngày</Text>
      <DatePicker
        defaultDate={new Date(2019, 4, 4)}
        minimumDate={new Date(2019, 1, 1)}
        maximumDate={new Date(2019, 12, 31)}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="dd/mm/yyyy"
        textStyle={{ color: "green" }}
        placeHolderTextStyle={{ color: "#d3d3d3" }}
        onDateChange={this.setDate}
        disabled={false}
        />
        </View>
        <View>
        <Text>Đến Ngày</Text>
      <DatePicker
        defaultDate={new Date(2020, 4, 4)}
        minimumDate={new Date(2020, 1, 1)}
        maximumDate={new Date(2020, 12, 31)}
        locale={"en"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="dd/mm/yyyy"
        textStyle={{ color: "green" }}
        placeHolderTextStyle={{ color: "#d3d3d3" }}
        onDateChange={this.setDate}
        disabled={false}
        />
        </View>
        </View>
      <FlatList
        onEndReached={() => {
          //load more here
        }}
        onEndReachedThreshold={0.7}
        // ListFooterComponent={}
        data={[1, 2, 3, 4,5,6]}
        // onRefresh={() => this.onRefresh()}
        // refreshing={this.state.isRefreshing}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <OptiosnMenu modalVisible={showModal} hideModal={() => setShowModal(false)} />
      {/*<Text>Hey{` ${token}` || ''}, you&#39;re logged in!</Text>*/}
      {/* <Button testID="logout-button" onPress={logoutRequest} title={strings.MAIN_SCREEN.logout} /> */}
    </View>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;