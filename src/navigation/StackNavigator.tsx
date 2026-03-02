import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './Routes';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from 'src/screens/DetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
