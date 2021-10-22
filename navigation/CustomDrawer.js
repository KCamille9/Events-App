import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView
} from "@react-navigation/drawer";

import { MainLayout } from "../screens";

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../constants"

const Drawer = createDrawerNavigator() 

const CustomDrawer = () => {
    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName="MainLayout"
            >
                <Drawer.Screen name="MainLayout">
                    {/* Render layout property and pass prop */}
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>

            </Drawer.Navigator>

        </View>
    )
}

export default CustomDrawer;