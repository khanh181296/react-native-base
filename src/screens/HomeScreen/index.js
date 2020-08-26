import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {
  MAIN_SCREEN,
  STAFF_MANAGEMENT,
  HOSPITAL_OPERATOR,
  HOSPITAL_QUALITY,
  MEDICAL_INCIDENT,
  MEDICAL_EXAMINATION,
} from 'constants/screens';
import { useTheme } from '@react-navigation/native';
import Modal from 'react-native-modal';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
        <Swiper autoplay horizontal={false} height={200} activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../../assets/banners/banner_1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/banners/banner_2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/banners/banner_3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate(STAFF_MANAGEMENT)}
          onLongPress={() => {
            setModalVisible(true);
          }}>
          <View style={styles.categoryIcon}>
            <Image style={styles.cardImage} source={require('../../assets/icons/canbo.png')} />
          </View>
          <Text style={styles.categoryBtnTxt}>Quản lý cán bộ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate(MEDICAL_INCIDENT)}>
          <View style={styles.categoryIcon}>
            <Image style={styles.cardImage} source={require('../../assets/icons/ykhoa.png')} />
          </View>
          <Text style={styles.categoryBtnTxt}>Sự cố y khoa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate(MEDICAL_EXAMINATION)}>
          <View style={styles.categoryIcon}>
            <Image style={styles.cardImage} source={require('../../assets/icons/khambenh.png')} />
          </View>
          <Text style={styles.categoryBtnTxt}>Khám Bệnh</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate(HOSPITAL_OPERATOR)}>
          <View style={styles.categoryIcon}>
            <Image style={styles.cardImage} source={require('../../assets/icons/benhvien.png')} />
          </View>
          <Text style={styles.categoryBtnTxt}>Điều hành bệnh viện</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate(HOSPITAL_QUALITY)}>
          <View style={styles.categoryIcon}>
            <Image style={styles.cardImage} source={require('../../assets/icons/chatluong.png')} />
          </View>
          <Text style={styles.categoryBtnTxt}>Chất Lượng bệnh viện</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '100%', height: 200, backgroundColor: 'white' }}>
          <Button
            title="MedicalExaminationList"
            onPress={() => {
              toggleModal();
              navigation.navigate('MedicalExaminationList');
            }}
          />
          <Button
            title="MedicalExaminationUpdate"
            onPress={() => {
              toggleModal();
              navigation.navigate('MedicalExaminationUpdate');
            }}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
