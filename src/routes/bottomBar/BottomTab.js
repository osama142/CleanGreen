import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../../screens/Dashboard';
import Survey from '../../screens/Survey';
import Covid from '../../screens/Covid';
import {StyleSheet, View, Text} from 'react-native';
import AddScreen from '../../screens/AddScreen';
import {Image} from 'react-native';
import Trainings from '../../screens/Tranings';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -35,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View
      style={{
        width: 55,
        height: 55,
        borderRadius: 35,
        backgroundColor: 'green',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 55,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: ({}) => <Text />,
          tabBarIcon: ({focused}) => (
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/homeIcon.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? 'green' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trainings"
        component={Trainings}
        options={{
          tabBarLabel: ({}) => <Text />,
          tabBarIcon: ({focused}) => (
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/trainingIcon.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? 'green' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: ({}) => <Text />,
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assets/plusIcon.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
                marginTop: 17,
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Survey"
        component={Survey}
        options={{
          tabBarLabel: ({}) => <Text />,
          tabBarIcon: ({focused}) => (
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/surveyIcon.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? 'green' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Covid"
        component={Covid}
        options={{
          tabBarLabel: ({}) => <Text />,
          tabBarIcon: ({focused}) => (
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/covidIcon.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? 'green' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconView: {alignItems: 'center', justifyContent: 'center', top: 10},
});

export default BottomTabNavigator;
