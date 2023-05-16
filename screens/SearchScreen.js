import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar} from "react-native";
import LottieView from 'lottie-react-native';
import { useRef } from "react";
import ButtonRound from "../components/ButtonRound";
import CardComponent from "../components/SearchScreen/CardComponent";

const SearchScreen = () =>{

    const animation = useRef(null);

    return(
        <SafeAreaView style={styles.droidSafeArea}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Pick your path to</Text>
                <Text style={styles.titleStyle}>better credit.</Text>
            </View>
            <View style={styles.cardContainer}>
                <CardComponent color="#fff">
                    <View style={{flex: 0.3}}>
                        <Text style={{color: 'gray', fontWeight: '500', fontSize: 12}}>Are you ready for this new experience ?</Text>
                        <Text style={{fontWeight: '500', fontSize: 28}}>Build credit while you save</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <LottieView source={require('../assets/card.json')} style={{width: '100%', height: '100%'}}
                        autoPlay={true} loop={true} speed={0.5}/>
                    </View>
                    <View style={{flex: 0.2}}>
                        <ButtonRound title={"Get Started"} color="#ff9900"/>
                    </View>
                </CardComponent>
            </View>
            <View style={styles.smallcardContainer}>
                <CardComponent color="#fff">
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                        <LottieView source={require('../assets/bear.json')} 
                        autoPlay={true} loop={true}/>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={{color: 'gray', fontWeight: '500', fontSize: 12, padding: 6}}>Earn 5% per year on your interest !! </Text>
                            <Text style={{fontWeight: '300', fontSize: 24}}>Build credit while you save</Text>
                            <ButtonRound title="View" color="#ff9900"/>
                        </View>
                    </View>
                </CardComponent>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonRound title="Login" color="#fff" customStyle={styles.loginButtonContainer}/>
            </View>
        </SafeAreaView>
    )    
}

const styles = StyleSheet.create({
    droidSafeArea:{
        flex: 1,
        backgroundColor: "#0099ff",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    titleContainer:{
        flex: 0.5,
        flexDirection: 'column',
        backgroundColor: '#0099ff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleStyle:{
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        textAlign: 'center'
    },
    smallcardContainer:{
        flex: 0.8,
        //backgroundColor: 'yellow',
        marginVertical: 12
    },
    cardContainer:{
        flex: 1.6
    },
    buttonContainer:{
        flex: 1,
       // backgroundColor: 'green'
    },
    loginButtonContainer:{
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 15
    }
});

export default SearchScreen;