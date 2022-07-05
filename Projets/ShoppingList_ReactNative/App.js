import react,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, placeholder } from 'react-native';

  // useState permet de générer un state dans nos variables locales ou une sorte d'Event
  //onchagetext
  // valider l'element : evenement onpresse 
  // varr myproduct en array pour sotcker les infos 
export default function App() {
  const [product, setProduct]= useState("");
  const [MyProduct, setMyProduct]= useState([]);
  const inputHandler= (val)=>{
    // fonction flechée 
    setProduct(val)

  }
  // event for submit 
  const submitHandler=()=>{
    // on affiche le produit qui a été saisie ou tapé dans ce cas 
    console.log(product); 
    console.log("Success"); 
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.TextInput}
        placeholder="Nouveau produit"
        onChangeText={inputHandler}
        value={product}
        />
        <Button title="Valider"
        onPress={submitHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:40, 
   paddingTop: 60, 
  },
  inputContainer:{
    flexDirection:"row", 



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
