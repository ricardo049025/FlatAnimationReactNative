import { View, Text, StyleSheet, StatusBar, Platform, SafeAreaView, Image } from "react-native"
import TopSection from "../components/ChatScreen/TopSection/TopSection";
import MidSection from "../components/ChatScreen/MidSection/MidSection";
import BottomSection from "../components/ChatScreen/BottomSection/BottomSection";


const ChatScreen = () =>{
    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TopSection title="Good Morning"/>
                </View>
                <View style={styles.centerSection}>
                    <MidSection />
                </View>
                <View style={styles.bottonSection}>
                    <BottomSection title="Popular"/>
                </View>
            </View>
        </SafeAreaView>
    )    
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    container:{
        flex: 1,
        padding: 10
    },
    topSection:{
        flex: 1,
        //backgroundColor: 'red'
    },
    centerSection:{
        flex: 3,
        //backgroundColor: 'yellow'
    },

    bottonSection:{
        flex: 2,
        //backgroundColor: 'red'
    }
});

export default ChatScreen;