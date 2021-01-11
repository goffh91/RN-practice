import React from 'react';
import { View } from 'react-native';

import CustomWebView from '../../components/CustomWebView';

const Presenter = props => {
    const { navigation, params } = props;

    return (
        <View style={{ flex: 1 }}>
            <CustomWebView
                navigation={navigation}
                params={params}
            />
        </View>
    );
}

export default Presenter;