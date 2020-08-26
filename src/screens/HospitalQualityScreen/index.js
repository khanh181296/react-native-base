import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HospitalQualityScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>HospitalQualityScreen</Text>
      </View>
    );
};

export default HospitalQualityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
