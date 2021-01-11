import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigatior from './navigations';
import configureStore from './store/configureStore';


const App = () => {
    const store = configureStore();

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <RootNavigatior/>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
