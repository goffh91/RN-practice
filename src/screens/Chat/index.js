import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenOptions } from '../../navigations/options';
import DetailScreen from './Detail';
import Container from './container';

const Stack = createStackNavigator();

export default ({ navigation, route }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={route.name}
                component={Container}
                options={StackScreenOptions}
            />
            <Stack.Screen
                name={"Detail"}
                component={DetailScreen}
            />
        </Stack.Navigator>
    );
};
