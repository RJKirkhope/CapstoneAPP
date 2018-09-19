import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CurrentVehicleScreen from '../screens/CurrentVehicleScreen';
import MyGarageScreen from '../screens/MyGarageScreen';
import NewVehicleScreen from '../screens/NewVehicleScreen'


const LinksHome = createStackNavigator({
  Home: HomeScreen,
});

LinksHome.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'}
    />
  ),
};

const LinksCurrentVehicle = createStackNavigator({
  Links: CurrentVehicleScreen,
});

LinksCurrentVehicle.navigationOptions = {
  tabBarLabel: 'Current Vehicle',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
      ? `ios-information-circle${focused ? '' : '-outline'}`
      : 'md-information-circle'}
    />
  ),
};

const LinksNewVehicle = createStackNavigator({
  Links: NewVehicleScreen,
})

LinksNewVehicle.navigationOptions = {
  tabBarLabel: 'New Vehicle',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
      ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'}
    />
  ),
};

const LinksGarage = createStackNavigator({
  Settings: MyGarageScreen,
});

LinksGarage.navigationOptions = {
  tabBarLabel: 'My Garage',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
      ? `ios-information-circle${focused ? '' : '-outline'}`
      : 'md-information-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  LinksHome,
  LinksCurrentVehicle,
  LinksNewVehicle,
  LinksGarage,
});
