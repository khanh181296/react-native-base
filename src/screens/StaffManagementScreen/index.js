  
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StaffManagementScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>StaffManagementScreen</Text>
      </View>
    );
};

export default StaffManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});