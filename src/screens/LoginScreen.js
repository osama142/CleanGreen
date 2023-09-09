import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import React from 'react';
import BackGround from './ImageScreen';
import InputTextField from '../components/global/InputTextField';
import Button from '../components/global/Button';
import Constants from '../assets/Constants';
import {useOrientation} from '../hooks/Orientation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = props => {
  const handleBackPress = () => {
    BackHandler.exitApp();
  };
  const {dimensions} = useOrientation();
  const {navigation} = props;
  const handlePress = () => {
    navigation.navigate('');
  };
  return (
    <ScrollView>
      <BackGround>
        <TouchableOpacity onPress={handleBackPress} style={{padding: 20}}>
          <Icon
            name="arrow-back-ios"
            size={24}
            color={'white'}
            width={30}
            height={30}
            paddingLeft={7}
          />
        </TouchableOpacity>
      </BackGround>
      <View
        style={{
          marginHorizontal: dimensions.width * 0.04,
          width: dimensions.width * 0.92,
          alignSelf: 'center',
        }}>
        <Text style={styles.maintext}>Login</Text>
        <Text style={styles.labelText}>Email</Text>
        <InputTextField
          placeHolder="Enter your email"
          keyboard={'email-address'}
        />
        <Text style={styles.labelText}>Password</Text>
        <View>
          <InputTextField
            placeHolder="Enter your password"
            secureText={true}
            onChangeText={val => props.onChangeText(val)}
          />
        </View>
        <Button
          textColor={'white'}
          btnLabel={'Login'}
          press={() => {
            navigation.navigate('Dashboard');
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',

            width: 150,
            height: 25,
          }}>
          <Constants.SVG.LockIcon height={17} width={17} />
          <Text style={styles.svgStyle}> Forgot Password</Text>
        </View>
        <View
          style={[
            styles.svgDimension,
            {marginHorizontal: dimensions.width * 0.31},
          ]}>
          <View style={styles.iconStyle}>
            <Constants.SVG.GoogleIcon height={20} width={20} />
          </View>
          <View style={styles.iconStyle}>
            <Constants.SVG.Facebook height={20} width={20} />
          </View>
          <View style={styles.iconStyle}>
            <Constants.SVG.TwitterIcon height={20} width={20} />
          </View>
        </View>
        <View style={styles.textStyle}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.bottomStyle}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maintext: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
  labelText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  svgStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    height: 25,
  },
  svgDimension: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  bottomStyle: {
    color: 'green',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  iconStyle: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    height: 33,
    width: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
export default LoginScreen;
