import React from 'react';
import { ActivityIndicator } from 'react-native';

const WebViewLoading = props => {
    const color = props?.color || 'blue';
    const size = props?.size || 'large';

    return (
        <ActivityIndicator
            color={color}
            size={size}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        />
    );
}

export default WebViewLoading;