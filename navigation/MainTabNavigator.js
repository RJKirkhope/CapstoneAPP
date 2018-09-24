import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
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
      name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'}
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
      name={Platform.OS === 'ios' ? `ios-add${focused ? '' : '-outline'}` : 'md-add'}
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
      name={Platform.OS === 'ios' ? `ios-car${focused ? '' : '-outline'}` : 'md-car'}
    />
  ),
};

export default createBottomTabNavigator({
  LinksHome,
  LinksNewVehicle,
  LinksGarage,
});
