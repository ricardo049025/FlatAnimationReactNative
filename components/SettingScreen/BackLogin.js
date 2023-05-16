import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {SharedValue} from 'react-native-reanimated'
import {Ionicons} from '@expo/vector-icons';
import ButtonRound from '../ButtonRound';

const BackLogin = ({rotate,loginHandler})=>{
  const [isLogin, setIsLongin] = useState(false);

  const flipCard = () =>{
    console.log('actual ' + isLogin);
    setIsLongin(current => !current);
  }

  useEffect(() =>{
    console.log('use effect: ' + isLogin)
    if(isLogin){
      rotate.value = rotate.value ? 0 : 1;
      loginHandler(isLogin);
    }
  },[isLogin])

    return (
      <View style={styles.container}>
        <View style={styles.iconStyle}>
          <Ionicons name='lock-closed' color="black" size={32}/>
          <Text style={styles.tileStyle}>Forgot Password?</Text>
        </View>
        <View style={styles.inputStyle}>
          <TextInput style={styles.textInputStyle} placeholder="email"/>
        </View>
        <View style={styles.buttonStyle}>
            <ButtonRound title="Log in" color="#ff9900" customStyle={styles.buttonCustomeStyle}/>
            <TouchableOpacity onPress={flipCard}>
              <Text style={styles.textForgotPass}>{`< Back to login`}</Text>
              </TouchableOpacity>
        </View>
      </View>
    );
  }
export default BackLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    //Android shadow
    elevation: 5,
    //IOS shadow
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    
  },  
  iconStyle: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    //backgroundColor: 'red'
  },
   tileStyle:{
      fontSize: 18,
      fontWeight: '800'
  },
  inputStyle: {
    flex: 0.5,
    flexDirection: 'column',
    height: 500,
    zIndex: 2,
   // backgroundColor: 'green',
    justifyContent: 'center'
  },
  buttonStyle:{
    flex: 0.5,
    //backgroundColor: 'blue'
  },
  textInputStyle:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
    
  },
  textForgotPass:{
    textAlign: 'left',
    alignSelf:'baseline',
    fontSize: 14,
    color: '#6ddddc',
    fontWeight: '600',
    marginTop: 10
  },
});