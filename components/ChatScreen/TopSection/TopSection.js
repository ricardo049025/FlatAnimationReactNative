import { View, StyleSheet, Text, Image } from "react-native";
import CircleImage from './CircleImage';

const TopSection = ({title}) =>{
    return(
        <View style={styles.topSection}>
            <View style={{flex: 1.5, flexDirection: 'row'}}>
                <View style={{flex: 1.8, alignItems: 'baseline', alignSelf: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: '700'}}>{title}</Text>
                </View>
                <View style={{flex: 0.5, alignItems: 'center', alignSelf: 'center'}}>
                    <CircleImage height={60} width={55} imageUrl="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"/>
                </View>
            </View>
            <View style={{flex: 0.5}}>
                <Text style={{color: '#b3b3b3', fontWeight: '500'}}>Ricardo, Good day starts with breakfast </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
     topSection:{
        flex: 1
    }
});

export default TopSection;