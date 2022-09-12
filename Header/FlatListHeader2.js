import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, onPress, Alert } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const DATA = [
  {
    id: "Parties",
  },
  {
    id: "Transactions",
    
  },
  {
    id: "Inventory",
    
  },
  {
    id: "Tax",
    
  },
  {
    id: "Credit",
    
  },
  {
    id: "Debit",
    
  },
  {
    id: "Transection",
    
  },
  {
    id: "Rest",
    
  },
  {
    id: "Grand Total",
    
  },
  {
    id: "Payment Via UPI , Paytm, Phonepe,Gpay"
    
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress => Alert.alert("This is Empty Button")} style={[styles.item, backgroundColor]}>
    {/* style={{ height: 43, justifyContent: 'center' }} */}
    <Text style={[styles.title, textColor]}>{item.id}</Text>
  </TouchableOpacity>
);

const FlatListHeader2 = () => {
  const [selectedId, setSelectedId] = useState(null);
 
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "lightgreen" : "white";
    const color = item.id === selectedId ? 'blue' : 'grey';
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
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({ 
  container: {
    flex:1,
    marginTop: -510,
    marginBottom: -265,
    marginLeft: 0,
    marginHorizontal: 5,
    marginVertical: 20,
    
   // borderColor: 'blue',
  },
  item: {
    padding: 12,
    marginVertical: 9,
    marginHorizontal: 8,
    height: 45,
    width: 'auto',
    textAlign:'center',
    borderBottomLeftRadius: 30,
    //borderBottomRightRadius: ,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 35,
   // borderRadius: 50px 1px 50px 1px;
    //borderRadius: 40, 
    //borderColor: 'green' ,
  },
  title: {
    paddingBottom: 1,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 1,
    fontSize: 15,
  },
});
export default FlatListHeader2;