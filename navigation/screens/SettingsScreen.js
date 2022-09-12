import * as React from 'react';
import { View, Text } from 'react-native';
//import bubble from '../../Header/Bubble';
export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold',marginTop:200 }}></Text>
        </View>

    );
}