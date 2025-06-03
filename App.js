import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import StatsScreen from './screens/StatsScreen';
import ReportsScreen from './screens/ReportsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AllRidesScreen from './screens/AllRidesScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Početna" component={HomeScreen} />
        <Tab.Screen name="Statistika" component={StatsScreen} />
        <Tab.Screen name="Izvještaji" component={ReportsScreen} />
        <Tab.Screen name="Vožnje" component={AllRidesScreen} />
        <Tab.Screen name="Postavke" component={SettingsScreen} />
        <Tab.Screen name="O autoru" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}