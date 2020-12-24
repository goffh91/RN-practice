import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import getScreenOptions from './styles/navigation';
import HomeScreen from './screens/Home';
import SettingScreen from './screens/Setting';

const { Screen, Navigator } = createBottomTabNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Navigator
                    initialRouteName={"Home"}
                    screenOptions={getScreenOptions}
                >
                    <Screen name={"Home"} component={HomeScreen}/>
                    <Screen name={"Setting"} component={SettingScreen}/>
                </Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
