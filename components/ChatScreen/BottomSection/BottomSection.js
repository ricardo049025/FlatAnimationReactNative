import { ScrollView, StyleSheet, View, Text, FlatList, Image } from "react-native"
import { popularFood } from '../../../consts/food'

const BottomSection = ({title}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{fontSize: 26, fontWeight: '700', alignContent: 'center'}}>{title}</Text>
            </View>
            <ScrollView style={styles.listContainer}>
                <FlatList 
                data={popularFood}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{padding: 10}}
                keyExtractor={item => item.key}
                renderItem={({item}) => {
                    return(
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{uri: item.image}} style={styles.popularImage}/>
                            <View>
                                <Text>{item.type}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <AntDesign name={start} size={16} color='orange' style={{marginRight: 3}}/>
                                    <Text>{item.rating}</Text>
                                </View>
                            </View>
                            <Text>{item.price}</Text>
                        </View>
                    )
                }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: 'yellow',
        
    },
    titleContainer:{
        flex: 0.2
    },
    listContainer:{
        flex: 1.8,
        backgroundColor: 'green'
    }
})

export default BottomSection