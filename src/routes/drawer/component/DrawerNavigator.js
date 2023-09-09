import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavContent from '../DrawerContent';
import BottomTabNavigator from '../../bottomBar/BottomTab';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = ({navigation, route}) => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => {
        return <DrawerNavContent {...props} />;
      }}>
      <Drawer.Screen name="Drawer">
        {props => <MainStackNavigator {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
