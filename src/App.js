import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigatior from './navigations';
import CustomWebView from './components/CustomWebView';

const App = () => {
    return (
        <SafeAreaProvider>
            <RootNavigatior/>
        </SafeAreaProvider>
    );
};

export default App;
