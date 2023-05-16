import {Keyboard, Platform, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import {LinearGradient} from 'expo-linear-gradient';
import FrontLogin from "../components/SettingScreen/FrontLogin";
import BackLogin from "../components/SettingScreen/BackLogin";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';


const SettingScreen = () =>{

  const [isLogin, setIsLongin] = useState(true);

  const changeLoginHandler = (value) =>{
    setIsLongin(value);
    console.log('ricardo new IsLogin: ' + value);
  }

  useEffect(() =>{
    console.log("useEffect outside: " + isLogin);
  }, [isLogin])
    
const rotate = useSharedValue(0);

  const frontAnimatedStyles = useAnimatedStyle(()=>{
    const rotateValue = interpolate(rotate.value,[0,1],[0,180])
    return{transform:[{rotateY : withTiming(`${rotateValue}deg`,{duration:1000})}]}
  })
  const backAnimatedStyles = useAnimatedStyle(()=>{
    const rotateValue = interpolate(rotate.value,[0,1],[180,360])
    return{transform:[{rotateY : withTiming(`${rotateValue}deg`,{duration:1000})}]}
  })
    return(
        <>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{backgroundColor: 'white', flex:1}}>
        <LinearGradient colors={['yellow','#f3bdff','#6ddddc']} style={styles.container}>
              <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <Animated.View style={[styles.cardContainer,frontAnimatedStyles,{zIndex: isLogin ? 2 : 0}]}>
                        <FrontLogin loginHandler={changeLoginHandler}  rotate={rotate}  />
                    </Animated.View>
                    <Animated.View style={[styles.cardContainer,backAnimatedStyles,{position: 'absolute', zIndex: !isLogin ? 2 : 0}]}>
                        <BackLogin loginHandler={changeLoginHandler} rotate={rotate} />
                    </Animated.View>
                </View>
              </SafeAreaView>
        </LinearGradient>
        </TouchableWithoutFeedback>
        </>
    )    
}

const styles = StyleSheet.create({
    root:{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 30
    },
    cardContainer:{
      //backgroundColor: 'blue',
       width: 300,
       height: 300,
      justifyContent: 'center',
      alignContent: 'center',
      backfaceVisibility:'hidden',
   }

  });

export default SettingScreen;