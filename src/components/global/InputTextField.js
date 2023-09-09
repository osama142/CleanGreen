import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Constants from '../../assets/Constants';

const InputTextField = props => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeHolder}
        keyboardType={props.keyboard}
        secureTextEntry={props.secureText && !showPassword}
        style={styles.input}
      />
      {props.secureText && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}>
          {showPassword ? (
            <Constants.SVG.eyeShowIcon width={22} height={22} />
          ) : (
            <Constants.SVG.eyeHideIcon width={22} height={22} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F3F3F3',
    marginVertical: 5,
    fontSize: 18,
    height: 60,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  iconContainer: {
    marginLeft: 10,
    position: 'absolute',
    top: 25,
    right: 10,
    color: 'red',
  },
});

export default InputTextField;
