import React from 'react';
import DrawerNavigator from './drawer/component/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default RootStack;
