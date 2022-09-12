import React, { Component } from "react";
import { Alert, Modal, TouchableOpacity, StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import Plusdata from "./Plusdata";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';

class ModelPlus extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
 
    const renderOptionItem = ({item}) => {
      return (
        <View style = {styles.optionItemWrapper}>
        <TouchableOpacity
                  
                  onPress={() => Alert.alert("This is Empty")}
                  
                  style={{ height: 43, justifyContent: 'center' }}
                >
          <Text style = {styles.optionName}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      );
    };
    const { modalVisible } = this.state;
    return (

      //----------------------------------------------------
      <View style={styles.centeredView}>
      
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
       

<TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible(false)} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.optionListWrapper} >
          
                
                  <FlatList 
                  data={Plusdata}
                  renderItem={renderOptionItem}
                  keyExtractor={item => item.id}
                  numColumns={2}
                />
          </View>
      

        </View>
      </TouchableOpacity>
  
        </Modal>
        <Pressable
          style={[styles.buttonOP, styles.buttonOpen]}
          onPress={() => {this.setModalVisible(true)
            }}
        >
          <Ionicons name="add" size={55} color={"white"} style={{ justifyContent: "center",
          paddingLeft: 3,
    alignItems: "center",alignSelf: 'center',}}/>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    // backgroundColor: 'yellow',
  },
  modalView: {
    marginTop: 400,
    margin: 25,
    height: 250,
    width: 350,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOP: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginBottom: 50,
    elevation: 7,
    alignSelf: 'center',
  },
  buttonOpen: {
    backgroundColor: "#483d41",
  },
  buttonClose: {
    backgroundColor: "#797979",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyleOP: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 60
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  optionListWrapper: {
    height: 150,
    paddingTop: 0,
    paddingBottom: 0,
  },
  
  optionItemWrapper: {
    backgroundColor: 'lightgreen',
    marginTop: 3,
    width: 'auto',
    marginBottom: 3,
    marginRight: 5,
    marginLeft: 5,
    paddingLeft: 30,
    borderRadius: 20,
    shadowColor: 'colors.black',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  optionName: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
  },
});

export default ModelPlus;