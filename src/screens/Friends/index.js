import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './Detail';
import Container from './container';

const Stack = createStackNavigator();

export default ({ navigation, route }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={route.name} component={Container}/>
            <Stack.Screen name={"Detail"} component={DetailScreen}/>
        </Stack.Navigator>
    );
};
