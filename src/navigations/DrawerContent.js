import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = props => {
    
    const nativateToScreen = route => {
        return () => {
            props.navigation.dispatch(
                CommonActions.navigate({
                    name: route,
                    params: {},
                })
            )
        }
    }

    return (
        <View style={styles.imageContainer}>
            <DrawerContentScrollView>
                <View>
                    <View>
                        <Image
                            source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                            style={{width: 200, height: 200}}
                        />
                    </View>
                    <Text style={styles.sectionHeading}>Section 1</Text>
                    <View style={styles.navSectionStyle}>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={nativateToScreen('Chats')}
                        >Chats</Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={nativateToScreen('Friends')}
                            >Friends</Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={nativateToScreen('Setting')}
                        ></Text>
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={{paddingLeft: 10, paddingRight: 30}}>
                <Text>Copyright</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
    },
    imageContainer: {
        alignItems: 'center',
        padding: 50,
    },
    sectionHeading: {
        color: '#fff',
        backgroundColor: '#123123',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },
    navSectionStyle: {
        backgroundColor: '#04ffb6'
    },
    navItemStyle: {
        padding: 10,
        color: '#fff'
    }
});

export default DrawerContent;