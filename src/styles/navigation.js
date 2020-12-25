import TabBarIcon from '../components/TabBarIcon';

export const TabNavigationOptions = ({ route }) => {    
    return {
        headerStyle: {},
        headerTitleStyle: {},
        tabBarLabel: route.name,
        tabBarIcon: ({ focused }) => TabBarIcon({ name: route.name, focused }),
    };
}

export const TabScreenOptions = ({ route }) => {
    return {};
}

export const StackNavigationOptions = ({ route }) => {
    return {
        headerStyle: {},
        headerTitleStyle: {},
    };
}

export const StackScreenOptions = ({ route }) => {
    return {};
}
