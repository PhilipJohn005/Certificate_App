import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const TextButton=({onPress})=>{
  return (
    <View style={{marginBottom:20}}>
      <TouchableOpacity activeOpacity={0.8}
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.T}>ADD TEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles=StyleSheet.create({
  button:{
    backgroundColor: "black",
    paddingLeft: 110,
    paddingRight: 100,
    padding: 10,
    borderRadius: 10,
    marginLeft:20,
    marginRight:20
  },
  T:{
    color: 'white',
    fontSize: 21,
  },
});

export default TextButton;
