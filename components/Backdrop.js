import { Animated, StyleSheet } from "react-native";
import Colors from "../consts/color";

const Backdrop = ({scrollX, width}) =>{

    const backgroundColor = scrollX.interpolate({
        inputRange: Colors.map((item,index) => index * width),
        outputRange: Colors.map((item,index) => item)
    });

    return (<Animated.View style={[StyleSheet.absoluteFillObject,{backgroundColor}]} />)
}


export default Backdrop;