import react,{useState} from 'react';
import { StyleSheet,
   Text, View,
   TextInput, Button, 
  placeholder, ScrollView, FlatList }
   from 'react-native';

    const Products= ({name})=>{
        return(
            <View style= { styles.items }>
                <Text  style={styles.element}> { name }</Text>
            </View>
        )
    }


   const styles = StyleSheet.create({
   
    items:{
      // backgroundColor: "red" 
      marginTop:10 
    }, 
    element:{
      // voir doc color reference 
      backgroundColor: "#ffb6c1", 
      padding:20, 
      fontSize: 17, 
      marginVertical: 5
  
    }
  });
  export default Products; 