//import {setStatusBarBackgroundColor} from 'expo-status-bar';
import * as React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import FlatListHeader from '../../Header/FlatListHeader';
import FlatListHeader2 from '../../Header/FlatListHeader2';
import FlatListHeader3 from '../../Header/FlatListHeader3';


//import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatListHeader navigation={navigation}/>
            <FlatListHeader2/>
            <FlatListHeader3/>
        </View>
    );
}