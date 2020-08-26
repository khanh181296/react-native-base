import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { logout } from 'actions/userActions';
import {
  MAIN_SCREEN,
  STAFF_MANAGEMENT,
  HOSPITAL_OPERATOR,
  HOSPITAL_QUALITY,
  MEDICAL_INCIDENT,
  MEDICAL_EXAMINATION,
} from '../../constants/screens';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Avatar</Title>
                <Caption style={styles.caption}>@email</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => <Icon name="home" color={color} size={size} />}
              label="Home"
              onPress={() => {
                props.navigation.navigate(MAIN_SCREEN);
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="account-outline" color={color} size={size} />}
              label="Quản lý cán bộ "
              onPress={() => {
                props.navigation.navigate(STAFF_MANAGEMENT);
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="bookmark-outline" color={color} size={size} />}
              label="Điều hành bệnh viện"
              onPress={() => {
                props.navigation.navigate(HOSPITAL_OPERATOR);
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="md-home" color={color} size={size} />}
              label="Chất lượng bệnh viện"
              onPress={() => {
                props.navigation.navigate(HOSPITAL_QUALITY);
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Sự cố y khoa"
              onPress={() => {
                props.navigation.navigate(MEDICAL_INCIDENT);
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Khám bệnh"
              onPress={() => {
                props.navigation.navigate(MEDICAL_EXAMINATION);
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => <Icon name="exit-to-app" color={color} size={size} />}
          label="Đăng xuất"
          onPress={logoutRequest}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
