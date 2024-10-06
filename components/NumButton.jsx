import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const NumButton=()=>{
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text>12</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles=StyleSheet.create({
  button: {
    backgroundColor:"grey",
    padding:5,
    marginLeft:15,
    borderRadius:10,
    paddingRight:10,
    paddingLeft:10
  },
});

export default NumButton;
