import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";

const ButtonRound = ({title,color,customStyle}) => {
    return (<TouchableOpacity>
                <View style={[styles.btnRound,{backgroundColor: color}, customStyle]}>
                    <Text style={styles.btnTitle}>{title}</Text>
                </View>
            </TouchableOpacity>);
}

const styles = StyleSheet.create({
    btnRound:{
        width: '100%',
        height: 30,
        padding: 2,
        borderRadius: 5,
    },
    btnTitle:{
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    }
});

export default ButtonRound;