import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicalExaminationScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>MedicalExaminationScreen</Text>
      </View>
    );
};

export default MedicalExaminationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});