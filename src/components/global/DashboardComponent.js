import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useOrientation} from '../../hooks/Orientation';
const DashboardComponent = props => {
  const IconComponent = props.Icon;
  const dimensions = useOrientation();
  return (
    <TouchableOpacity style={[styles.subContainer, props.customStyle]}>
      <View style={styles.innerStyle}>
        <IconComponent height={35} width={35} />
      </View>
      <Text style={styles.contentTxt}>{props.EnglishText}</Text>
      <Text style={styles.UrducontentTxt}>{props.UrduText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerStyle: {
    backgroundColor: '#F3F3F3',
    borderRadius: 14,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTxt: {
    color: 'black',
    fontWeight: '600',
    marginTop: 15,
    fontSize: 17,
  },
  UrducontentTxt: {
    color: 'grey',
    fontWeight: '500',
    marginTop: 10,
    fontSize: 18,
  },
});

export default DashboardComponent;
