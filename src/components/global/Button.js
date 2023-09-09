import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Button({btnLabel, textColor, press}) {
  return (
    <LinearGradient
      colors={['#AACC00', '#538536']}
      style={{
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 12,
        marginVertical: 30,
        marginBottom: 60,
      }}>
      <TouchableOpacity onPress={press}>
        <Text style={{color: textColor, fontSize: 22}}>{btnLabel}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
