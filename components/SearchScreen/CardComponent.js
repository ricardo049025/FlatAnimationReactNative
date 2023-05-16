import { StyleSheet, View } from "react-native";

const CardComponent = ({color,children}) => {

    return <View style={[styles.cardStyle, {backgroundColor: color}]}>
            {children}
            </View>
    
}

const styles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 16,
        borderRadius: 16,
        padding: 10,
        //Android
        elevation: 5,
        //IOS
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    }
})

export default CardComponent;