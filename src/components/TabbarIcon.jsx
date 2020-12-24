import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({ name, focused }) => (
    <Icon
        size={26}
        name={name}
        color={focused ? '#777' : '#000'}
    />
);

export default TabBarIcon;