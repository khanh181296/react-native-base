import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicalIncidentScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>MedicalIncidentScreen</Text>
      </View>
    );
};

export default MedicalIncidentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});