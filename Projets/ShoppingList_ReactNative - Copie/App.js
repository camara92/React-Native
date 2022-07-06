import react,{useState} from 'react';
import { StyleSheet,
   Text, View,
   TextInput, Button, 
  placeholder, ScrollView, FlatList }
   from 'react-native';
export default function App() {

  const [product, setProduct]= useState();
  const [myProduct, setMyProducts]= useState([]);
  
  const inputHandler= (val)=>{
    // fonctig,ngon fleche 
    setProduct(val)

  }

  const submitHandler=()=>{
    // on affiche le produit qui a été saisie ou tapé dans ce cas 
    console.log(product); 
 
    // setMyProducts([...setMyProducts, product]) 
   // setMyProducts(CurrentMyProducts=>[product, ...CurrentMyProducts])
   const idsrting = Date.now().toString(); 
    setMyProducts(CurrentMyProducts=>[{key:idsrting, name:product}, ...CurrentMyProducts])
    setProduct('');   
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
    </Text>
    }
      />

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
