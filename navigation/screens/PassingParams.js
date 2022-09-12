import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function PassingParams({ route,navigation }) {
    const Selected = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'black', fontSize:25}}>Id: {Selected.id}</Text>
        <Text style={{color:'black', fontSize:25}}>Month: {Selected.mon}</Text>
        <Text style={{color:'black', fontSize:25}}>Amount: {Selected.amount}</Text>
         </View>
    );
}
const styles=StyleSheet.create({
    scroller: {
        flex: 1,
        alignContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 300,
        color:'black'    
    }
  });