import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const DrawerButton = () => {
    const navigation = useNavigation();
    return (
        <View style={{flexDirection: 'row', paddingRight: 15}}>
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.openDrawer())}}>
                <Text>Open</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DrawerButton;