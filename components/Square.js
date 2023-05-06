import { Animated, StyleSheet, View } from "react-native";

const Square = ({scrollX, width, height}) => {
    const YOLO = Animated.modulo(Animated.divide(Animated.modulo(scrollX,width),new Animated.Value(width)),1);
    const rotate = YOLO.interpolate({inputRange: [0, .5, 1],outputRange: ['35deg','0deg','35deg']})
    const translateX = YOLO.interpolate({inputRange: [0, .5, 1],outputRange: [0,-height,0]})

    return (
        <Animated.View style={[
            styles.shapeStyle, 
            {width: height, height: height, top: -height * 0.6, left: -height * 0.3},
            {transform: [{rotate}, {translateX}]}]} />
    )
}

const styles = StyleSheet.create({
    shapeStyle: {
        backgroundColor: '#fff', 
        borderRadius: 86, 
        position: 'absolute', 
        
    }
})

export default Square;