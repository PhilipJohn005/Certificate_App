
import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const TxtInput=({onTextSubmit,position})=>{                     //property
  const [textInputValue, setTextInputValue] = useState('');

  const handleSubmit=()=>{
    onTextSubmit(textInputValue);
    setTextInputValue('');
  };

  return (
    <View style={{ position:'absolute', left:position.x,top:position.y }}>
      <TextInput
        style={styles.transparentInput}
        placeholder="Enter Name"
        value={textInputValue}
        autoFocus={true}
        inputMode='text'
        onChangeText={(text) => setTextInputValue(text)}
        onSubmitEditing={handleSubmit} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transparentInput: {
    height:40,
    width:200,
    borderColor:'gray',
    padding:10,
    backgroundColor:'transparent',
    color:'black',
  },
});

export default TxtInput;
