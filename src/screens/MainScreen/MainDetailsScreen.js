import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MainDetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
            <View style={styles.header}>
              <Text style={{flex: 1}}>Họ tên:</Text>
              <Text style={{flex: 1}}>khanh duc</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Giới tính:</Text>
              <Text style={{flex: 1}}>Nam</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Nghề nghiệp:</Text>
              <Text style={{flex: 1}}>Sinh viên</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Số điện thoại:</Text>
              <Text style={{flex: 1}}>0333888999</Text>
            </View>
            <View style={styles.header}>
              <Text style={{flex: 1}}>Địa chỉ:</Text>
              <Text style={{flex: 1}}>Cầu giấy-Hà nội</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Chuyên khoa:</Text>
              <Text style={{flex: 1}}>Khám nội</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Ngày khám:</Text>
              <Text style={{flex: 1}}>20/8/2020</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Trạng thái hẹn:</Text>
              <Text style={{flex: 1}}>Đã hẹn</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Email:</Text>
              <Text style={{flex: 1}}>khanh@gmail.com</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Đối tượng:</Text>
              <Text style={{flex: 1}}>BHYT</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Số thẻ BHYT:</Text>
              <Text style={{flex: 1}}>16455555555</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Tình trạng bệnh:</Text>
              <Text style={{flex: 1}}>đau bụng</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Buổi khám:</Text>
              <Text style={{flex: 1}}>sáng</Text>
            </View>
            <View style={styles.header}>
              <Text style={{flex: 1}}>Giờ khám:</Text>
              <Text style={{flex: 1}}>21h</Text>
            </View>
      </View>
      
    );
};

export default MainDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    flexDirection:'row',
    padding: 10
  }
});