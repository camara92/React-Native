import react,{useState} from 'react';
import { StyleSheet,View, TextInput, Button} from 'react-native';



    const AddProduct= ({submitHandler})=>{

        const [product, setProduct]= useState(''); 
        // on a amené inputhandlmer vers ici

        const inputHandler= (val)=>{
            // fonctig,ngon fleche 
            setProduct(val)
            
        
          }

        return(
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.TextInput}
            placeholder="Nouveau produit"
            onChangeText={inputHandler}
            value={product}
            />
            <Button title="Valider"
            onPress={ ()=> submitHandler(product)}
            />
          </View>
        )
    }

    export default AddProduct; 

   const styles = StyleSheet.create({
  
    inputContainer:{
      flexDirection:"row", 
      marginBottom:9, 
  
  
    }, 
    TextInput:{
      borderColor: "grey", 
      borderWidth: 1, 
      padding: 5, 
      paddingLeft: 9, 
      fontSize: 18, 
      flexGrow:1, 
  
  
    }
  });