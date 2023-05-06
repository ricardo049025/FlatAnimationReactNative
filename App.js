import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import DATA from './consts/data';
import * as React from 'react';
import Colors from './consts/color';

const {width, height} = Dimensions.get('screen');

const Indicator = ({scrollX}) => {
  return (
    <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
      {DATA.map((item,index) => {
        const inputRange = [(index - 1) * width, index * width, (index+1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp'
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp'
        });
        return <Animated.View key={`indicator-${index}`} style={{
          height: 10, 
          width: 10, 
          borderRadius: 5, 
          backgroundColor: '#333', 
          margin: 10,
          backgroundColor: 'white',
          opacity,
          transform: [{scale}]
        }} />
        })}
    </View>
  )
}

const Backdrop = ({scrollX}) =>{

  const backgroundColor =  scrollX.interpolate({
    inputRange: Colors.map((item,index) => index * width),
    outputRange: Colors.map((item,index) => item)
  });

  return(
    <Animated.View
    style={[ StyleSheet.absoluteFillObject,{backgroundColor}]}
    >

    </Animated.View>
  )  
}

const Square = ({scrollX}) =>{
  const YOLO = Animated.modulo(Animated.divide(Animated.modulo(scrollX,width),new Animated.Value(width)),1);
  const rotate = YOLO.interpolate({
    inputRange: [0, .5, 1],
    outputRange: ['35deg','0deg','35deg']
  })
  const translateX = YOLO.interpolate({
    inputRange: [0, .5, 1],
    outputRange: [0,-height,0]
  })
  return(
    <Animated.View style={{
      width: height, 
      height: height, 
      backgroundColor: '#fff', 
      borderRadius: 86, 
      position: 'absolute', 
      top: -height * 0.6,
      left: -height * 0.3,
      transform: [
        {
          rotate
        },
        {
          translateX
        }
        ]}}>

    </Animated.View>
  )
}

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar style="hidden" />
      <Backdrop scrollX={scrollX}/>
      <Square scrollX={scrollX} />
      <Animated.FlatList
      contentContainerStyle={{paddingBottom:100}} 
      data={DATA}
      keyExtractor={item => item.key}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={32}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: scrollX}}}],
        {useNativeDriver: false}
        )}
      renderItem={({item}) => {
        return (
          <View style={{width, alignItems: 'center', padding: 20}} >
            <View style={{flex: .7, justifyContent: 'center'}}>
              <Image 
              source={{uri: item.image}} 
              style={{width: width/2, height: height/2, resizeMode: 'contain'}}/>
            </View>
            <View style={{flex: .3}}>
              <Text style={{fontWeight: '800', fontSize: 24, marginBottom: 10, }}>{item.title}</Text>
              <Text style={{fontWeight: '300'}}>{item.description}</Text>
            </View>
          </View>
          )
      }}
      />
      <Indicator scrollX={scrollX}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
