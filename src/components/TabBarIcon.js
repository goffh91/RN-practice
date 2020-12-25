import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * @ref https://oblador.github.io/react-native-vector-icons
 */

const TabBarIcon = ({ name, focused }) => {

    let iconName;
    
    switch (name) {
        case 'Friends':
            iconName = 'people';
            break;
        
        case 'Chats':
            iconName = 'chatbox-ellipses';
            break;

        case 'Setting':
            iconName = 'settings-sharp';
            break;

        default:
            return;
    }

    return (
        <Icon
            size={26}
            name={iconName}
            color={focused ? '#777' : '#000'}
        />
    );
}

export default TabBarIcon;