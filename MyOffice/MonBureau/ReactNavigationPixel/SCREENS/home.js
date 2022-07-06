import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Home = ({ navigation }) => {

    // console.log(props); 
    const hanlePress = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Portefolio"})
        //navigation.push('Portefolio')

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home page</Text>
            <Button title="Portefolio" 
            onPress={hanlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightblue", 
        flex:1, 
        justifyContent:"center", 
        alignItems:"center", 
        fontFamily: "Inter_900Black",
       


    }, 
    text:{
        fontWeight:"bold"
    }
   
})

export default Home;
