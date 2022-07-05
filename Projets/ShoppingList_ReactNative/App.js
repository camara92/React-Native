import react,{useState} from 'react';
import { StyleSheet,
   Text, View,
   TextInput, Button, 
  placeholder, ScrollView }
   from 'react-native';

  // useState permet de générer un state dans nos variables locales ou une sorte d'Event
  //onchagetext
  // valider l'element : evenement onpresse 
  // varr myproduct en array pour sotcker les infos 
export default function App() {
  const [product, setProduct]= useState("");
  const [myProduct, setMyProducts]= useState([]);
  const inputHandler= (val)=>{
    // fonction flechée 
    setProduct(val)

  }
  // event for submit 
  const submitHandler=()=>{
    // on affiche le produit qui a été saisie ou tapé dans ce cas 
    console.log(product); 
    // générer un autre tableau de stockage de data product 
    // setMyProducts([...setMyProducts, product])
    setMyProducts(CurrentMyProducts=>[...CurrentMyProducts, product])
   // console.log(myProduct);
    // on supprime alors l'array préalablement vide avant ajout de pproduit dans array products 
    setProduct(''); 
    // on doit ensuite injecter cette valeur dans my product et si plusieurs dans Aray Product 
    // on peut aussi appliquer le scrollview dans l'ensemble de l'application ou sur uniquement sur 
    // ou sur la liste des produits qui seront afdfichés 
    //  le but est à titre perso 
    
    
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
      <ScrollView>
      <View style={styles.items}>
          {
            myProduct.map((product, index)=>
          <Text key={index} style={styles.element}>
            {product}
          </Text>
          
          )
          }
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:40, 
   paddingTop: 60, 
   backgroundColor: "", 
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


  }, 
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
