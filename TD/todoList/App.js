import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './component/Task';
export default function App() {
  return (
    <View style={styles.container}>
     {/* today task  */}
     <View styele={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's task </Text>
      {/* image on our app  */}
    
      <View styele={StyleSheetList.items}>
      {/* this is where the tasks will  */}
      {/* import du fichier Task  */}
      <Task  text={'Task 1'}/>
      <Task  text={'Task 2'}/>
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED" , 

  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,  


  }, 
  sectionTitle:{
    fontSize: 50, 
    textAlign: "center", 
    color: "red"
  }, 
  items:{
marginTop:30
  }
});
