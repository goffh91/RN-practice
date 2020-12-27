import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabNavigationOptions, TabBarOptions } from './styles/navigation';
import ChatListScreen from './screens/Chats';
import FriendListScreen from './screens/Friends';
import SettingScreen from './screens/Setting';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        // <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName={"Home"}
                        screenOptions={TabNavigationOptions}
                        tabBarOptions={TabBarOptions}
                    >
                        <Tab.Screen name={"Chats"} component={ChatListScreen}/>
                        <Tab.Screen name={"Friends"} component={FriendListScreen}/>
                        <Tab.Screen name={"Setting"} component={SettingScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        // </Provider>
    );
};

export default App;
