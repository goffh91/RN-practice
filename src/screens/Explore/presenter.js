import React from 'react';
import { Text, Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomWebView from '../../components/CustomWebView';

const Presenter = props => {
    const { navigation, params } = props;

    return (
        <CustomWebView/>
    );
}

export default Presenter;