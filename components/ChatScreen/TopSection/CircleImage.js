import { StyleSheet, View, Image } from "react-native";


const circleImage = ({imageUrl,height, width}) =>{
    return(
        <View style={styles.circleImage}>
            <Image  source={{uri: imageUrl, height, width}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    circleImage:{
        backgroundColor: '#faeae2',
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        alignItems: 'center',
        alignContent: 'center'
    }
})

export default circleImage;