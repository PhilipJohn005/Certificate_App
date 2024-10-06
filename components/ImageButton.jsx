import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import localimage from '@/assets/images/x.jpg';
//rnfc-> react native functional component
const ImageButton=({onPress,selectedImage})=>{

    let imageSource;
    if (selectedImage){
        imageSource={uri:selectedImage};
      }else{
        imageSource=localimage; 
      }
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
    
        <Image 
          source={imageSource} 
          style={styles.image} 
          resizeMode='contain' 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft:20,
    marginRight:20,
  },
  image:{
    width:320,  
    height:450, 
    marginTop:20,
  },
});

export default ImageButton;