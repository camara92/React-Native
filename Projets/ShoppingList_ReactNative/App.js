import react,{useState} from 'react';
import { StyleSheet,
   Text, View,
   TextInput, Button, 
  placeholder, ScrollView, FlatList }
   from 'react-native';

  // useState permet de générer un state dans nos variables locales ou une sorte d'Event
  //onchagetext
  // valider l'element : evenement onpresse 
  // varr myproduct en array pour sotcker les infos 
export default function App() {
  // const [product, setProduct]= useState("");
  // flatlist on passe a des obj 
  const [product, setProduct]= useState();
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
    //  setMyProducts(CurrentMyProducts=>[...CurrentMyProducts, product])
    // flt
   // setMyProducts(CurrentMyProducts=>[product, ...CurrentMyProducts])
   const idsrting = Date.now().toString(); 
    setMyProducts(CurrentMyProducts=>[{key:idsrting, name:product}, ...CurrentMyProducts])
   // console.log(myProduct);
    // on supprime alors l'array préalablement vide avant ajout de pproduit dans array products 
    setProduct(''); 
    // on doit ensuite injecter cette valeur dans my product et si plusieurs dans Aray Product 
    // on peut aussi appliquer le scrollview dans l'ensemble de l'application ou sur uniquement sur 
    // ou sur la liste des produits qui seront afdfichés 
    //  le but est à titre perso;;;;;; 
    // on peut utiliser la FlatList en temes de performances de l'application
    // et aussi pour empecher en cas de chargement lent un plantage 


    
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
      {/* ajout de flatlist au lieu de scrollview  */}
      <FlatList
      data= {myProduct}
      renderItem={({item})=>   <Text  style={styles.element}>
      {item.name}
    </Text>}
      />

   
      {/* <ScrollView> */}
      {/* <View style={styles.items}>
          {
            myProduct.map((product, index)=>
          <Text key={index} style={styles.element}>
            {product}
          </Text>
          
          )
          }
      </View> */}
    
      {/* </ScrollView> */}
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
    marginBottom:9, 


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
