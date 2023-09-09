import React from 'react';
import RootStack from './src/routes/RootStack';
import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';

const App = () => {
  return <RootStack />;
};

export default App;
