import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardType } from 'react-native';

export default function App() {
  const [name, setName] = useState();
  const [prenom, setPrenom] = useState();
  const [age, setAge] = useState();
  return (
    <View style={styles.wrapper}>
    <Text style={styles.text}>Nom : {name} </Text>
     <TextInput style={styles.TextInput}
     value={name} onChangeText={name=> setName(name)}
    placeholder="Indiquer votre nom : CAMARA"
    />
    {/* prenom */}
    <Text style={styles.text}>Prénom : {prenom} </Text>
     <TextInput style={styles.TextInput}
     value={prenom} onChangeText={prenom=> setPrenom(prenom)}
    placeholder="Indiquer votre prénom : CAMARA"
    />
    {/* age */}
    {/* paramrtrer les inputs aussi : si num : nomnbre etc : à voir  */}
    {/* KeyboardType */}
    {/* methode map de js : mozilla developper  */}
    {/* but : recupérer les données en tant que valeur  */}
    <Text style={styles.text}>Age : {age} </Text>
     <TextInput style={styles.TextInput}
    placeholder="Indiquer votre age : 20 "
     value={age}
      onChangeText={age=> setAge(age)}
     keyboardType="numeric"
    />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
  marginTop: 50, 
  // backgroundColor: "red", 
  alignItems: "center", 
  height: 200, 
  },
  TextInput: {
    height:40, 
    borderColor: "grey", 
    borderWidth: 1, 
    padding: 10, 
    margin:9, width: "90%"
  }, 
  text:{
    fontSize: 20, 
    fontWeight:"bold"

  }
});
