import React from 'react';
import { Text, View } from 'react-native';
import MainStack from './MainStack';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  return (
    <NavigationContainer>
    <MainStack/>
    </NavigationContainer>
  );
};

export default Navigation;
