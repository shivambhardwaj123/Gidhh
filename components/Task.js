import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* <view style={styles.itemrigth}>Delete</view> */}
        <View style={styles.square}></View>

        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      
      <View style={styles.circular}></View>
     
    </View>

  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'khaki',
    height: 100,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
    
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
   // opacity: 0.4,
    borderRadius: 15,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
});

export default Task;