import React, { useRef } from 'react';
import { Alert, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

/**
 * @reference
 * https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md
 * 
 */

const CustomWebView = props => {

    const webView = useRef();
    const { navigation, params } = props;

    return (
        <WebView
            ref={webView}
            originWhitelist={['*']}
            source={{
                uri: 'https://m.naver.com',
                // html: HTML,
            }}

            onShouldStartLoadWithRequest={(request) => {
                return request.url.startsWith('https://m.naver.com')
            }}
   
            onNavigationStateChange={(navState) => {
                console.log(navState);
            }}
   
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
            automaticallyAdjustContentInsets={false}
            thirdPartyCookiesEnabled={true}
            sharedCookiesEnabled={true}
            allowFileAccess={true}
        />
    );
}

const HTML = `<!DOCTYPE html>\n
<html>
  <head>
    <title>Messaging</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
    </style>
  </head>
  <body>
    <button onclick="sendPostMessage()">Send post message from JS to WebView</button>
    <p id="demo"></p>    
    <script>
      function sendPostMessage() {
        window.ReactNativeWebView.postMessage('Message from JS');
      }
      window.addEventListener('message',function(event){
        document.getElementById('demo').innerText = JSON.stringify(event.data);
      },false);
    </script>
  </body>
</html>`;

export default CustomWebView;