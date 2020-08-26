import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../HomeScreen';
import StaffManagementScreen from '../StaffManagementScreen';
import HospitalOperatorScreen from '../HospitalOperatorScreen';
import NotificationScreen from '../NotificationScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();
const StaffManagementStack = createStackNavigator();
const HospitalOperatorStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Trang chủ',
        tabBarColor: '#FF6347',
        tabBarIcon: ({color}) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Thông Báo',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="notifications" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="StaffManagement"
      component={StaffManagementStackScreen}
      options={{
        tabBarLabel: 'Quản lý cán bộ',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="HospitalOperator"
      component={HospitalOperatorStackScreen}
      options={{
        tabBarLabel: 'Điều hành bệnh viện',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="notifications" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Bitecco',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-search"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
                            <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Thông báo"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationStack.Navigator>
);

const StaffManagementStackScreen = ({navigation}) => (
    <StaffManagementStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <StaffManagementStack.Screen
        name="Quản lý cán bộ"
        component={StaffManagementScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#1f65ff"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </StaffManagementStack.Navigator>
  );

  const HospitalOperatorStackScreen = ({navigation}) => (
    <HospitalOperatorStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HospitalOperatorStack.Screen
        name="Điều hành bệnh viện"
        component={HospitalOperatorScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#1f65ff"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HospitalOperatorStack.Navigator>
  );
