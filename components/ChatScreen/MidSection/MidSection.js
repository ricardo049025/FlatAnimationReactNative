import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
 import { tabs } from '../../../consts/food'
import { useState } from "react";

const MidSection = () =>{
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return(
        <>
            <View style={styles.chipContainer}>
                <FlatList data={tabs}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{padding: 10}}
                keyExtractor={(item, index) => `${item}-${index}`}
                horizontal
                renderItem={({item}) =>{
                    return(
                        <TouchableOpacity onPress={() => setSelectedTab(item)}>
                            <View style={[styles.pill,{backgroundColor: selectedTab === item ? 'orange' : 'transparent'}]}>
                                <Text style={[styles.pillTex,{color: selectedTab === item ? '#fff' : 'orange'}]}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                />
            </View>
            <View style={styles.imageContainer}>

            </View>
        </>   
    )
}

const styles = StyleSheet.create({
    chipContainer:{
        flex: 0.4,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        flex: 1.8,
        backgroundColor: 'blue'
    },
    pill:{
        paddingHorizontal: 18,
        paddingVertical: 6 / 2,
        borderRadius: 12,
        padding: 10
    },
    pillTex:{
        fontSize: 18,
        fontWeight: '700'
    }
})

export default MidSection;