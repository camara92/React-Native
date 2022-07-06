///import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, placeholder } from 'react-native';
import { TextInput, TouchableOpacity, Platform} from 'react-native';
import react, {useState} from 'react';
import Task from './component/Task';
export default function App() {

  const  [task, setTask]= useState(); 
  const  [taskItems, setTaskItems]= useState([]); 
  const handleTask =()=>{
    setTaskItems([...taskItems, task])
    setTask(null); 

    console.log(task)
  }
const completeTask =(index)=>{
  let itemCopy = ([...taskItems, task])
  itemCopy.splice(index, 1); 
  setTaskItems(itemCopy)
}
  return (
    <View style={styles.container}>
     {/* today task  */}
     <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's task </Text>
      {/* image on our app  */}
    
      <View style={styles.items}>
      {/* this is where the tasks will  */}
      {/* import du fichier Task  */}
      {
        taskItems.map((item, index)=>{
         return  (
         <TouchableOpacity key={index} onPress={ ()=> completeTask()}>
          {/* <Task key={index} text={item} /> */}
          <Task text={item} />
         </TouchableOpacity>)
        })
      }
      {/* <Task  text={'Task 1'}/>
      <Task  text={'Task 2'}/> */}
      </View>
     </View>
     {/* KeybopardAvoidingView  */}
     <KeyboardAvoidingView 
     behavior={Platform.OS ==="ios" ?"padding": "height"} 
     style={styles.writeTaskWrapper}
     >
    <TextInput style={styles.input} placeholder={'Write a Task'} 
    value={task} onChangeText={text=> setTask(text)}></TextInput>
    <TouchableOpacity onPress={ ()=>handleTask()}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
     </KeyboardAvoidingView>

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
  }, 
  writeTaskWrapper:{
    position:"absolute", 
    bottom:60, 
    width:"100%", 
    flexDirection: "row", justifyContent: "space-around", 
    alignItems:"center"

  }, 
  addText: {

  }, 
  input:{
    paddingVertical: 15, 
    width:250, 
    paddingHorizontal: 15,
    borderColor: "#c0c0c0", 
    borderWidth:1, 
    borderRadius:60, 


  }, 
  addWrapper:{
    width:60, 
    height:60, 
    backgroundColor:"white", 
    justifyContent:"center", 
    borderRadius:60, 
    justifyContent: "center", 
    borderColor: "#c0c0c0", 
    borderWidth:1,

  }, 
  addText:{

  }
});