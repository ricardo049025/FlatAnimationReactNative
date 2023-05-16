import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ButtonRound from '../ButtonRound';


const FrontLogin = ({rotate, loginHandler})=> {
    
    const [isLogin, setIsLongin] = useState(true);

    const flipCard = () =>{
      console.log('actual ' + isLogin);
      setIsLongin(current => !current);
    }

    useEffect(() =>{
      console.log('use effect: ' + isLogin)
      if(!isLogin){
        rotate.value = rotate.value ? 0 : 1;
        loginHandler(isLogin);
      }
    },[isLogin])

    return (
      <View style={styles.container}>
        <View style={styles.iconStyle}>
          <Ionicons name='people' color="black" size={32}/>
          <Text style={styles.tileStyle}>SIGN IN</Text>
        </View>
        <View style={styles.inputStyle}>
          <TextInput style={styles.textInputStyle} placeholder="Username"/>
          <TextInput style={styles.textInputStyle} placeholder="Password" secureTextEntry={true}/>
        </View>
        <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={flipCard}>
              <Text style={styles.textForgotPass}>Forgot Password ?</Text>
              </TouchableOpacity>
            <ButtonRound title="Log in" color="#ff9900" customStyle={styles.buttonCustomeStyle}/>
        </View>
      </View>
    );
  }
export default FrontLogin;

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
  },
   tileStyle:{
      fontSize: 18,
      fontWeight: '800'
  },
  inputStyle: {
    flex: 1,
    flexDirection: 'column',
    height: 500,
    zIndex: 2
  },
  textInputStyle:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  buttonStyle:{
    flex: 0.5
  },
  textForgotPass:{
    textAlign: 'right',
    fontSize: 14,
    color: '#6ddddc',
    fontWeight: '600'
  },
  buttonCustomeStyle:{
    marginHorizontal: '5%',
    width: '90%',
   marginTop: 10
  }
});