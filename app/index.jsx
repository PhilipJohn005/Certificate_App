
import FontButton from "@/components/FontButton";
import TextButton from "@/components/TextButton";
import WeightButton from "@/components/WeightButton";
import NumButton from "@/components/NumButton";
import { Text, View, StyleSheet } from "react-native";
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import ImageButton from "@/components/ImageButton";
import TxtInput from "@/components/TxtInput"; 
import React, {useRef} from 'react';
import {Animated, PanResponder} from 'react-native';


const Index = () => {
  const [showTextInput, setShowTextInput] = useState(false);   //inital state->false   
  const [selectedImage, setSelectedImage] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [textInputPosition, setTextInputPosition] = useState({}); // To store the input position

  const pan = useRef(new Animated.ValueXY()).current;
  let X;
  let Y;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) =>
        true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        true,
      onPanResponderMove: Animated.event([null,{dx:pan.x,dy:pan.y}],{useNativeDriver:false } ),
      onPanResponderRelease: (evt,gestureState) => {               
        
        pan.extractOffset();
        
      },
    }),
  ).current;

  const pickImageAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();    //requests permission from user
    if (permissionResult.granted===false) {
      alert('Permission to access media is required!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const onClick=()=>{   //executes first when add text is clicked
    setShowTextInput(true);
  };
  const handleTextSubmit=(text)=>{
    setDisplayedText(text);
    setShowTextInput(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Seritfy</Text>
        <Text style={styles.newCertificateWord}>New Certificate</Text>
      </View>
      
      <View style={styles.middleContainer}>
        <ImageButton 
          onPress={pickImageAsync} 
          selectedImage={selectedImage}
        />   

        <Animated.View
        style={{
          position: 'absolute', 
          left: textInputPosition.x,
          top: textInputPosition.y,
          transform:[{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        {showTextInput && (
          <TxtInput 
            onTextSubmit={handleTextSubmit} 
            position={textInputPosition} 
          />
        )}
      </Animated.View> 
      {displayedText && (    //display text sets to true
      <Text style={[styles.displayedText,{left:textInputPosition.x, top:textInputPosition.y}]}>
        {displayedText}
      </Text>
    )}
        
      </View>
      
      <View style={styles.bottomContainer}>
        <View style={styles.aboveBottom}>
          <FontButton />
          <WeightButton />
          <NumButton />
        </View>
        <TextButton onPress={onClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    marginLeft:20,
    fontSize:25,
  },
  newCertificateWord:{
    marginLeft:20,
    marginTop:15,
    fontSize:20,
    fontWeight:"bold",
  },
  topContainer:{
    flex:0.2,
    justifyContent:"flex-start",
    paddingTop:50,
  },
  middleContainer:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  aboveBottom: {
    flexDirection:"row",
    alignItems:"center",
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
  },
  bottomContainer:{
    flex:0.3,
    justifyContent:"flex-end",
  },
  displayedText:{
    position:'absolute',     //to display over other component
    color:'black',
    fontSize:12,
   
  },
});

export default Index;