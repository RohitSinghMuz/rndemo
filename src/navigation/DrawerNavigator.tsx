import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import DetailsScreen from 'src/screens/DetailsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
