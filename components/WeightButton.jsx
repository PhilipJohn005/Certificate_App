import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const WeightButton=()=>{
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text>Font Weight</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles=StyleSheet.create({
  button: {
    backgroundColor:"grey",
    padding:5,
    marginRight:10, 
    marginLeft:20,
    borderRadius:10,
  },
});

export default WeightButton;
