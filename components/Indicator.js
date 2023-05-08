import { Animated, StyleSheet } from "react-native";
import { View } from "react-native";

const Indicator = ({scrollX, quantity, width}) =>{
    
    return (
    <View style={styles.container}>
        {[...Array(quantity).keys()].map((i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const scale = scrollX.interpolate({inputRange,outputRange: [0.8, 1.4, 0.8],extrapolate: 'clamp'});
            const opacity = scrollX.interpolate({inputRange,outputRange: [0.4, 1, 0.4],extrapolate: 'clamp'});
            return (
                <Animated.View key={i} style={[styles.pointIndicator,{opacity,transform: [{scale}]}]} />
            )
        })}
        
    </View>
    )

    
} 

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 150,
        flexDirection: 'row'
    },
    pointIndicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 5
    }
})

export default Indicator;