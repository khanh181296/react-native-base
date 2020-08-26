// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// import { MAIN_SCREEN, HOME } from 'constants/screens';

// import MainScreen from 'screens/MainScreen';
// import HomeScreen from 'screens/HomeScreen';

// const Stack = createStackNavigator();

// const AppStack = () => (
//   <Stack.Navigator>
//      <Stack.Screen name={HOME} component={HomeScreen} />
//     <Stack.Screen name={MAIN_SCREEN} component={MainScreen} />
//   </Stack.Navigator>
// );

// export default AppStack;
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  MAIN_SCREEN,
  STAFF_MANAGEMENT,
  HOSPITAL_OPERATOR,
  HOSPITAL_QUALITY,
  MEDICAL_INCIDENT,
  MEDICAL_EXAMINATION
 } from 'constants/screens';

import MainScreen from 'screens/MainScreen';
import HomeScreen from 'screens/HomeScreen';
import MainTabScreen from 'screens/MainTabScreen';
import { DrawerContent } from '../screens/DrawerContent';
import StaffManagementScreen from 'screens/StaffManagementScreen';
import HospitalOperatorScreen from 'screens/HospitalOperatorScreen';
import HospitalQualityScreen from 'screens/HospitalQualityScreen';
import MedicalIncidentScreen from 'screens/MedicalIncidentScreen';
import MedicalExaminationScreen from 'screens/MedicalExaminationScreen';

const Drawer = createDrawerNavigator();

const App = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
  <Drawer.Screen name={MAIN_SCREEN} component={MainTabScreen} />
  <Drawer.Screen name={STAFF_MANAGEMENT} component={StaffManagementScreen} />
  <Drawer.Screen name={HOSPITAL_OPERATOR} component={HospitalOperatorScreen} />
  <Drawer.Screen name={HOSPITAL_QUALITY} component={HospitalQualityScreen} />
  <Drawer.Screen name={MEDICAL_INCIDENT} component={MedicalIncidentScreen} />
  <Drawer.Screen name={MEDICAL_EXAMINATION} component={MainScreen} />
</Drawer.Navigator>
);

export default App;

