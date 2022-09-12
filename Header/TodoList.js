import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView ,Button} from 'react-native';
import Task from '../components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [idx,setidx] = useState(0);
  const [new_text,setnew_text]    = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    setnew_text(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[idx]=new_text;
    //itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const DeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    
    itemsCopy.splice(idx, 1);
    setTaskItems(itemsCopy)
    
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}></Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity 
                 key={index}  onPress={() => setidx(index)}
                >
                  <Task text={item} />
                  <TextInput style={styles.input} placeholder={'write edited text'} value={new_text} onChangeText={text => setnew_text(text)} />
  <Button
   onPress={() => completeTask()}
  title="EDIT"
  color="#841584"
/>

<Button
    onPress={() => DeleteTask()}
  title="DELETE"
  color="red"
/>

                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
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
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  // items: {
  //   marginBottom: 10,
  // },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 670,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    //marginBottom: 600,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
