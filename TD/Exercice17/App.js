import React, {useState, } from "react";
import { View, Text, StyleSheet, Button, TextInput, placeholder, Image } from "react-native";
import'bootstrap/dist/css/bootstrap.min.css';
// importation de la react-dom pour mon projet 
export default function App() {

  const obj = {
    annuler : "",
   
  }
  const [info,setInfo ]= useState(obj); 

  const handlePress =()=>{
    setInfo({
      annuler :"Produit annulé avec succès. Merci", 
      valider: "Produit et je continue pour le paiement. 😜"
    })
  }
  const [name, setName] = useState(); 
  const [prenom, setPrenom] = useState();
  const [email, setEmail] =useState(); 
  const [age, setAge] = useState();
 
  // fin de la home page 
 return(
  <View style={styles.wrapper}>
    <View style={styles.header}> 
      {/* header component in react native project  */}
      {/* il faut qu'il soit navigable ou cliquable : btn, ahref, etc  */}
      <Text style={styles.TextHeader}>Accueil</Text>
      <Text style={styles.TextHeader}>Accueil</Text>
      <Text style={styles.TextHeader}>Sign Up</Text>
      <Text style={styles.TextHeader}>Sign In </Text>
      
    </View>
    <View>

      <View style={styles.inputs}>
      <Text style={styles.formulaire}>Formulaire inscription </Text>
        <Text style={styles.text}>Nom : {name}</Text>
      <TextInput placeholder="Taper votre nom " style={styles.textInput}
      onChangeText={val=> setName (val)} />
      {/* prenom */}
      <Text style={styles.text}>Prénom : {prenom}</Text>
   <TextInput placeholder="Taper votre prénom " style={styles.textInput}
      onChangeText={valPre=> setPrenom (valPre)} />
      {/* age  */}
      <Text style={styles.text}>Age : {age}</Text>
   <TextInput placeholder="Taper votre age" style={styles.textInput}
      onChangeText={val=> setAge (val)} />
    {/* email */}
    <Text style={styles.text}>Votre email : {email}</Text>
    <TextInput placeholder="Adresse email" style={styles.textInput}
      onChangeText={val=> setEmail (val)} />
      </View>
    </View>
    <View style={styles.choix}> 
    <Text style={styles.textFS20}>Affichage du choix de commande ou annuler  : {info.annuler }  </Text>
    </View>
    <View style={styles.container}>
      {/* validation ou annulation du choix  */}
        <Button title="Valider " onPress={ handlePress } >
        </Button>
        <hr></hr>
        <Button title="Annuler " onPress={ handlePress } >
        </Button>
    </View>
  </View>
 )


}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  wrapper: {
     
    backgroundColor: "", 
    alignItems: "center", 
    height: 200, 
    width: "100%", 
  },
  choix:{
    marginTop:50,
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  header:{
    flexDirection: "row", 
    // margin: 30, 
    backgroundColor: "blue", 
    color: "white",
    width: "100%", 
    padding: 20, 
    alignItems: "center", 
    gap: 20, 
    display: "flex", 
    flexWrap: "wrap", 
  }, 
  TextHeader: {
    color: "white", 
    fontSize:20, 
    fontFamily: "Arial", 
    fontWeight: "bold", 
  }, 
  logo:{
    color: "white", 
    fontSize:20, 
    fontFamily: "Arial", 
    fontWeight: "bold",
    textAlign:"rigth"
  }, 
  textInput: {
    marginTop: 15, 
    height:40, 
    borderColor:"grey" ,
    borderWidth:1,
    padding: 10, 
   
width:"90%"
  }, 
  formulaire:{
    marginTop: 25, 
   backgroundColor:"violet" ,
    padding: 10, 
    textAlign:"center", 
    color: "white",
    fontSize:17,
   
width:"90%"
  }
});
