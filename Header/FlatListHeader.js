import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';


const DATA = [
  {
    id: "Sales",
   // mon: "(Aug)",
    amount: "₹12,20,24000"
  },
  {
    id: "Receipt",
   // mon: "(Aug)",
    amount: "₹ 4,0000.00"
  },
  {
    id: "Purchase",
   // mon: "(Aug)",
    amount: "₹ 14,000.00"
  },
  {
    id: "upi",
   // mon: "(Aug)",
    amount: "₹ 14,000.00"
  },
  {
    id: "Bhardwaj",
   // mon: "(Aug)",
    amount: "₹12,20,24"
  },
  {
    id: "Shivam",
   // mon: "(Aug)",
    amount: "₹12,20,24"
  },
];

const Item = ({ item, backgroundColor, textColor, onPress }) => (
  <View style={[styles.item, backgroundColor]}>
    <Text style={[styles.mon, textColor]}>{item.id}</Text>
    <Text style={[styles.amount]} >{item.amount}</Text>
  </View>
);

const FlatListHeader = ({navigation}) => {
  // const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    // console.log('item-=-=-=',item)
    const backgroundColor = item.id === selectedId ? "black" : "white";
    const color = item.id === selectedId ? 'white' : 'grey';


    
    return (
      <TouchableOpacity onPress={() => {

        navigation.navigate('PassingParams', item);
      }}>
        <Item
          item={item}
          
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      </TouchableOpacity>

    )

  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      //style={{backgroundColor:'white'}}
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
    flex: 1,
    marginHorizontal: 3,
    marginLeft: 1,
    marginTop: 3,
    //Text: 40,
    
  },

  item: {
    padding: 3,
    marginVertical: 5,
    marginHorizontal: 9,
    height: 65,
    width: 150,
    borderRadius: 5,
    fontSize: 20,
  },

  mon: {
   // color: 'black',
    fontSize: 25,
    textAlign: 'auto'
  },
  amount: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    //textColor: 'bl',
    textAlign: 'auto',
    paddingTop: 6,
  },
});

export default FlatListHeader;