import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const FontButton=()=>{
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text>Font Style</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles=StyleSheet.create({
  button: {
    backgroundColor:"grey",
    padding:5,
    marginRight:10, 
    borderRadius:10,
    paddingRight:40,
    paddingLeft:40,
  },
});

export default FontButton;
