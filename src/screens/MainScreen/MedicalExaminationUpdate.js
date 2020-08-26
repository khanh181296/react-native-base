import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MedicalExaminationList = ({navigation}) => {
    return (
      <View style={styles.container}>
            <View style={styles.header}>
              <Text style={{flex: 1}}>Trạng Thái Hẹn:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Phiếu Khám:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Ngày Khám:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Buổi khám:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>
            <View style={styles.header}>
              <Text style={{flex: 1}}>Giờ khám:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Chuyên khoa:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Số phòng:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>bác sĩ:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>

            <View style={styles.header}>
              <Text style={{flex: 1}}>Ghi Chú:</Text>
              <Text style={{flex: 1}}>...</Text>
            </View>
      </View>
      
    );
};

export default MedicalExaminationList;

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