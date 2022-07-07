import React from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';

const Home = ({ navigation }) => {

    // console.log(props); 
    const hanlePress = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Portefolio"})
        //navigation.push('Portefolio')

    }
    // page de réservation bureau example de myoffice 
    const hanlePressOffice = ()=>{
        //  navigation.navigate('Portefolio')
        navigation.navigate({routeName: "Office"})
        //navigation.push('Portefolio')

    }

    // fin de code office de bureau progrmini 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home page</Text>
            <Text style={styles.messageWelcole}>Bienvenue chez votre Office : plus de flexibilité et d'organisation </Text>
           <View style={styles.boutonnav}>
           <Text>🕸️</Text>
            <Button  title="Portefolio" 
            onPress={hanlePress} />
            {/* bouton de navigation pour la réservation  */}
            <Text>🕸️</Text>
            <Button style={styles.boutonnav} title="Office" 
            onPress={hanlePressOffice} />
           </View>
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
    }, 
    boutonnav:{
        
        backgroundColor: "lightblue", 
        textAlign:"center"
    }, 
    messageWelcole: {
        textAlign:"center", 
        marginTop: 40
    }
   
})

export default Home;
