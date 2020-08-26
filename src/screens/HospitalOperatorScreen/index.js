  
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HospitalOperatorScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>HospitalOperatorScreen</Text>
      </View>
    );
};

export default HospitalOperatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});