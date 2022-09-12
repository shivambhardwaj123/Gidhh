import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
    name:"Shubhendra Agrawal.",
    title: "Customer",
    amount: "5,00  	⬆"
  },

  {
    id: "2",
    name:"Walkover Web Solution Pvt Ltd.",
    title: "Vendor",
    amount: "100.0 ⬆"
  },
  
  {
    id: "3",
    name:"Vikash Sir Walkover.",
    title: "Customer",
    amount: "90,0.0 ⬆"
  },
  {
    id: "4",
    name:"Pushpendra Sir.",
    title: "Customer",
    amount: "90,000 ⬆"
  },
  {
    id: "5",
    name:"Shivam Bhardwaj.",
    title: "Vendor",
    amount: "2,000 ⬆"
  },
  {
    id: "6",
    name:"subhash chandra Jha.",
    title: "Customer",
    amount: "₹ 12,000 ⬆"
  },
  {
    id: "7",
    name:"Lnct",
    title: "Vendor",
    amount: "₹ 1,22,000 ⬆"
  },
  {
    id: "8",
    name:"Bhopal.",
    title: "Vendor",
    amount: "₹ 10,000 ⬆"
  },
  {
    id: "9",
    name:"Harsh",
    title: "Customer",
    amount: "₹ 15,000 ⬆"
  },
  {
    id: "10",
    name:"Shivam Bharadwaj",
    title: "Vendor",
    amount: "₹ 8,000 ⬆"
  },
  {
    id: "11",
    name:"Bhardwaj Industry",
    title: "Vendor",
    amount: "₹ 8,000 ⬆"
  },
  {
    id: "12",
    name:"Hello",
    title: "Vendor",
    amount: "₹ 8,000 ⬆"
  },
  {
    id: "13",
    name:"walkover hello",
    title: "Vendor",
    amount: "₹ 8,000 ⬆"
  },
  {
    id: "14",
    name:"cs naidu",
    title: "Vendor",
    amount: "₹ 8,000 ⬆"
  },
  {
    id: "15",
    name:"Rk Reddy",
    title: "Vendor",
    amount: "₹ 8,000 ⬆"
  },
  {
    id: "16",
    name:"Walkover",
    title: "Company",
    amount: "₹ 55,000 ⬆"
  },
  {
    id: "17",
    name:"Hello",
    title: "A Product",
    amount: "₹ 6500 ⬆"
  },
  {
    id: "18",
    name:"keka",
    title: "Attendance",
    amount: "₹ 74,000 ⬆"
  },
  {
    id: "19",
    name:"Pushpendra Sir",
    title: "CEO",
    amount: "₹ 8,0000 ⬆"
  },
  {
    id: "20",
    name:"Bhardwaj",
    title: "Travel",
    amount: "₹ 21,000 ⬆"
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View>
    <Text style={[styles.title, textColor]}>{item.name}  </Text>
    </View>
    <View>
    <Text style={styles.amount}> {item.amount}</Text>
    </View>
    <View>
    <Text style={styles.title} >{item.title}</Text>
    </View>
  </TouchableOpacity>
);

const FlatListHeader3 = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#c6f6d5' : "white";
    const color = item.id === selectedId ? '#black' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        //showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginLeft:0,
    marginTop: -250,
    marginHorizontal: .5,
  //  position: 'absolute',

  },
  item: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 9,
    paddingHorizontal: 10,
    width: 1000,
    //borderRadius: 20,
    //position: 'absolute',
    
  },
  title: {
    fontSize: 18,

  },
  amount:{
    color: 'green',
    fontSize: 20,
    marginLeft:280,
    marginTop:-20,
    

  }
});

export default FlatListHeader3;