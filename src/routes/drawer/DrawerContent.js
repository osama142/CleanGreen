import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Drawer, Text} from 'react-native-paper';
import {useNavigationState} from '@react-navigation/native';

const SCREENS = [
  {name: 'Dashboard', icon: 'home', isActive: false},
  {name: 'Trainings', icon: 'school'},
  {name: 'Survey', icon: 'poll'},
  {name: 'Covid-19', icon: 'coronavirus'},
  {name: 'Profile', icon: 'people'},
  {name: 'Logout', icon: 'logout'},
];
const DrawerNavContent = ({navigation}) => {
  const [activeScreen, setActiveScreen] = useState('Dashboard');
  const handleNavigation = screenName => {
    navigation.navigate(screenName);
    setActiveScreen(screenName);
  };

  return (
    <ImageBackground
      source={require('../../assets/greenry.jpg')}
      style={styles.mainContainer}>
      <Drawer.Section style={styles.sectionStyle}></Drawer.Section>

      <Image
        source={require('../../assets/osama.jpg')}
        style={styles.drawerImage}
      />
      <Text style={styles.drawerText}>Joen Deo</Text>
      <Text style={styles.drawerText}>greyhat611@gmail.com</Text>
      <Text style={styles.drawerText}>Earn points: 20</Text>

      <View style={styles.drawerSectionContainer}>
        {SCREENS.map(screen => (
          <TouchableOpacity
            style={
              activeScreen === screen.name
                ? [
                    styles.screenContainer,
                    {backgroundColor: 'rgba(255, 255, 255, 0.2)'},
                  ]
                : styles.screenContainer
            }
            key={screen.name}
            onPress={() => handleNavigation(screen.name)}>
            <MaterialIcons name={screen.icon} size={30} color={'white'} />
            <View style={styles.ButtonIconConatiner}></View>
            <Text style={styles.screenTitle}>{screen.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '115%',
  },
  drawerSectionContainer: {
    marginTop: 20,
    flexDirection: 'column',
    marginRight: 15,
    marginLeft: 15,
  },
  sectionStyle: {
    alignItems: 'center',
  },
  screenTitle: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'DMSans-Medium',
    paddingBottom: 2,
  },
  ButtonIconConatiner: {
    padding: 15,
    marginBottom: 15,
  },
  drawerImage: {
    marginTop: 35,
    height: 100,
    width: 100,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 12,
  },
  drawerText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginBottom: 3,
  },
  screenContainer: {
    height: 60,
    width: 235,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginVertical: 2.1,
    paddingHorizontal: 15,
  },
});

export default DrawerNavContent;
