import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, placeholder, TouchableOpacity } from "react-native";

const Task= (props)=>{
    return (
        
            <View style={styles.item}>
                <View style={styles.itemleft}>
                <View style={styles.square}>
                </View>
                <Text style={styles.itemText}>{props.text} </Text>
                </View>
                <View style={styles.circular}>

                </View>
            </View>
           
       
    )
}
const styles = StyleSheet.create(
    {
        item: {
            backgroundColor:"#fff", 
            padding: 15, 
            borderRadius: 10, 
            alignItems:"center", 
            
            flexDirection: "row",
            justifyContent: 'space-between',
            marginBottom: 20, 

        }, 
        itemleft:{
            flexWrap: "wrap",
            alignItems:"center", 
            
            flexDirection: "row",
        },  
        square:{
            width: 24, 
            height: 24, 
            backgroundColor:"#55BCF6", 
            opacity:0.4, 
            borderRadius: 5, 
            marginRight: 15, 
        }, 
        circular:{
            width: 12, height: 12, 
            borderColor: "#55BCF6", 
            borderRadius: 5, 
            borderWidth: 2, 

        }, 
        itemText: {
            maxWidth: "80%", 
            

        }
    }
); 
export default Task; 