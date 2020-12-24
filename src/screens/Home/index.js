import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Container from './container';
import DetailScreen from '../Detail';

const { Screen, Navigator } = createStackNavigator();

export default props => {
    const { route } = props;

    return (
        <Navigator>
            <Screen name={`${route.name}`} component={Container} initialParams={props}/>
            <Screen name={'Detail'} component={DetailScreen} initialParams={props}/>
        </Navigator>
    );
}