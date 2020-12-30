import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTab';
import DrawerContent from './DrawerContent';
import { DrawerStyle } from './options';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
    return (
        <Drawer.Navigator
            initialRouteName="Chats"
            drawerType="front"
            drawerPosition="right"
            drawerStyle={DrawerStyle}
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Route"
                component={BottomTabNavigator}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;