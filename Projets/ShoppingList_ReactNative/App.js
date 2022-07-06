import react,{useState} from 'react';
import { StyleSheet,
   Text, View,
   TextInput, Button, 
  placeholder, ScrollView, FlatList }
   from 'react-native';
   import Products from './components/Products';
   import AddProduct from './components/AddProduct';

export default function App() {

  // const [product, setProduct]= useState('');
  // on enleve le state product et vers addproduct 
  const [myProduct, setMyProducts]= useState([]);
  
  // const inputHandler= (val)=>{
  //   // fonctig,ngon fleche 
  //   setProduct(val)

  // }

  const submitHandler=(productt)=>{
    // on affiche le produit qui a été saisie ou tapé dans ce cas 
    console.log(productt); 
 
    // setMyProducts([...setMyProducts, product]) 
   // setMyProducts(CurrentMyProducts=>[product, ...CurrentMyProducts])
   const idsrting = Date.now().toString(); 
    setMyProducts(CurrentMyProducts=>[{key:idsrting, name:productt}, ...CurrentMyProducts])
   setProduct('');   
  }
  
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.textheader}> Accueil </Text>
     </View>
    {/* on enlevé la view et on le met dans addproduct */}
      {/* ajout de flatlist au lieu de scrollview  */}
      {/* affichage de la vue AddProduct  */}
      {/* submithandler est mis sur addproduct pour faire l'interpollation via AddProduct */}
      <AddProduct submitHandler ={submitHandler} />
      <FlatList
      data= {myProduct}
      renderItem={({item})=> <Products name={item.name } />
    }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:40, 
   paddingTop: 60, 
   backgroundColor: "red", 
   

  },
  header:{
    backgroundColor: "blue",
    
    marginVertical: 15
    

  },
  textheader:{
    color: "white", 
    fontWeight:"bold", fontSize: 25, 

  }
  // inputContainer:{
  //   flexDirection:"row", 
  //   marginBottom:9, 


  // }, 
  // TextInput:{
  //   borderColor: "grey", 
  //   borderWidth: 1, 
  //   padding: 5, 
  //   paddingLeft: 9, 
  //   fontSize: 18, 
  //   flexGrow:1, 


  // }, 
  ,
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
