import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { View, Text, Button, Alert, Platform, BackHandler } from 'react-native';

const WebViewNavigation = props => {

    const {
        canGoBack,
        canGoForward,
        currentUrl,
        webView,
    } = props;

    const handleGoBack = e => {
        if (canGoBack) {
            webView.current.goBack();
        } else {
            navigator.goBack();
        }
    }

    const mainNavigationUris = [
        '/',
        '/compare',
        '/mypage/index',
        '/product/sale/index',
    ];
    const matchUri = String(currentUrl).replace('https://app.howtoyak.com', '');
    return (mainNavigationUris.includes(matchUri)) ? 
        (
            <NavigationWrap>
                <Button title={'Home'}/>
            </NavigationWrap>
        ) : (
            <NavigationWrap>
                <Button title={'Back'} onPress={handleGoBack}/>
            </NavigationWrap>
        );
}

const NavigationWrap = styled(View)`
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export default WebViewNavigation;