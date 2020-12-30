import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { tabNavActiveColor, tabNavInActiveColor } from '../styles/theme';

/**
 * @ref https://oblador.github.io/react-native-vector-icons
 */

const TabBarIcon = ({ name, focused }) => {

    let iconName;
    
    switch (name) {
        case 'Friend':
            iconName = 'people';
            break;
        
        case 'Chat':
            iconName = 'chatbox-ellipses';
            break;

        case 'Explore':
            iconName = 'earth-sharp';
            break;

        case 'Profile':
            iconName = 'ellipsis-horizontal';
            break;

        default:
            return;
    }

    return (
        <Icon
            size={26}
            name={iconName}
            color={focused ?
                tabNavActiveColor :
                tabNavInActiveColor
            }
        />
    );
}

export default TabBarIcon;