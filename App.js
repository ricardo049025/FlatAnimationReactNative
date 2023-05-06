import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import DATA from './consts/data';
import * as React from 'react';
import Indicator from './components/Indicator';
import Backdrop from './components/Backdrop';
import Square from './components/Square';

const {width, height} = Dimensions.get('screen');

export default function App() {
  
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar style="hidden" />
      <Backdrop scrollX={scrollX} width={width}/>
      <Square scrollX={scrollX} width={width} height={height}/>
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
      <Indicator scrollX={scrollX} quantity={DATA.length} width={width} />
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
