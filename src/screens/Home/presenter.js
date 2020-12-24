import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Presenter = props => {
    const { navigation, params } = props;

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Button
                title="go to detail"
                onPress={() => navigation.navigate('Detail')}
            />
            <Text>{JSON.stringify(params)}</Text>
        </SafeAreaView>
    );
}

export default Presenter;