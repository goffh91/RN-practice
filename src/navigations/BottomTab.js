import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigationOptions, TabBarOptions } from './options';

import ChatListScreen from '../screens/Chat';
import FriendListScreen from '../screens/Friend';
import ExploreScreen from '../screens/Explore';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={"Friend"}
            screenOptions={TabNavigationOptions}
            tabBarOptions={TabBarOptions}
        >
            <Tab.Screen name={"Friend"} component={FriendListScreen}/>
            <Tab.Screen name={"Chat"} component={ChatListScreen}/>
            <Tab.Screen name={"Explore"} component={ExploreScreen}/>
            <Tab.Screen name={"Profile"} component={ProfileScreen}/>
            
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;