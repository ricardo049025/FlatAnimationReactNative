import { StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import SettingScreen from './screens/SettingScreen';
import ChatScreen from './screens/ChatScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) =>{

  const { onPress, accessibilityState, name, label } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Ionicons name={name} color={focused ? "white" : 'red'} size={20} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='home' screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          position: 'absolute',
          bottom: 25,
          right: 16,
          left: 16,
          borderRadius: 16,
          backgroundColor: '#ffffff',
          ...styles.shadow
        }
      }}>
        <Tab.Screen name='home' component={HomeScreen} options={{
          tabBarButton: (props) => <TabButton {...props} name='home' label="home" />
        }}/>
        <Tab.Screen name='search' component={SearchScreen} options={{
          tabBarButton: (props) => <TabButton {...props} name='search' label="Search" />
        }}/>
        <Tab.Screen name='setting' component={SettingScreen} options={{
          tabBarButton: (props) => <TabButton {...props} name='cog-outline' label="Settings" />
        }}/> 
        <Tab.Screen name='chat' component={ChatScreen}options={{
          tabBarButton: (props) => <TabButton {...props} name='chatbox-ellipses-outline' label="Settings" />
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  shadow:{
   //IOS shadow
   shadowColor: 'black',
   shadowOffset: {width: 0, height: 2},
   shadowRadius: 6,
   shadowOpacity: 0.5,
    //for Android
    elevation: 5
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'

  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
    color: 'red',
  }
})
