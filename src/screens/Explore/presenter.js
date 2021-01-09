import React from 'react';
import { Text, Button, View } from 'react-native';

import CustomWebView from '../../components/CustomWebView';
import NavigationView from '../../components/NavigationView';

const Presenter = props => {
    const { navigation, params } = props;

    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <NavigationView/>
            <CustomWebView
                navigation={navigation}
                params={params}
            />
        </View>
    );
}

export default Presenter;