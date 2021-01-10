import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import theme from '../styles/theme';
import DrawerNavigator from './Drawer';

const RootNavigation = () => {
    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={theme[scheme]}>
            <DrawerNavigator/>
        </NavigationContainer>
    );
}

export default RootNavigation;
