import React, { useRef, useState, useEffect } from 'react';
import { Alert, Platform, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

import WebViewLoading from './WebViewLoading';
import WebViewNavigation from './WebViewNavigation';

/**
 * @reference
 * https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md
 * 
 */

const CustomWebView = props => {

    const webView = useRef(null);
    const { navigation, params } = props;

    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('https://app.howtoyak.com');

    const backAction = () => {
        if (canGoBack) {
            webView.current.goBack();
        } else {
            navigation.goBack();
        }
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);
        () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, [canGoBack]);

    return (
        <>
            <WebViewNavigation
                webView={webView}
                canGoBack={canGoBack}
                canGoForward={canGoForward}
                currentUrl={currentUrl}
            />
            <WebView
                ref={webView}
                source={{ uri: currentUrl }}
                originWhitelist={['*']}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                onShouldStartLoadWithRequest={(request) => {
                    return Boolean(request.url.match('howtoyak.com'));
                }}
      
                onNavigationStateChange={(navState) => {
                    setCanGoBack(navState.canGoBack);
                    setCanGoForward(navState.canGoForward);
                    setCurrentUrl(navState.url);
                }}
      
                startInLoadingState={true}
                renderLoading={() => (<WebViewLoading/>)}

                onLoadEnd={() => {
                    webView.current.postMessage('Hello from RN');
                }}
      
                onMessage={e => {
                    Alert.alert('Message received from JS: ', e.nativeEvent.data);
                }}

                style={{}}
                containerStyle={{}}
                applicationNameForUserAgent={`Kyunwu/${String(Platform.OS).toUpperCase()}`}
                pullToRefreshEnabled={true}
                mediaPlaybackRequiresUserAction={false}
                automaticallyAdjustContentInsets={false}
                thirdPartyCookiesEnabled={true}
                sharedCookiesEnabled={true}
                allowFileAccess={true}
            />
        </>
    );
}

const INJECTED_JAVASCRIPT = `
  (function() {
    const isUIWebView = () => {
        return navigator.userAgent.toLowerCase()
          .match(/\(ip.*applewebkit(?!.*(version|crios))/);
    }

    const receiver = isUIWebView() ? window : document;
    receiver.addEventListener('message', e => {
        const eventData = JSON.parse(e.data);
        window.ReactNativeWebView.postMessage(
            JSON.stringify({ eventData })
        );
    });

  })();
`;

export default CustomWebView;