import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Constants from '../assets/Constants';

export default function AddScreen({navigation}) {
  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View>
      <TouchableOpacity onPress={openDrawer}>
        <Constants.SVG.listIcon height={25} width={25} />
      </TouchableOpacity>
      <Text>AddScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
