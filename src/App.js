import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigations/BottomTab';
import CustomWebView from './components/CustomWebView';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomTabNavigator/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
