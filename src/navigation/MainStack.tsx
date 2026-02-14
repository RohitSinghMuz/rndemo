import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'src/screens/Login/Login';
import SplashScreen from 'src/screens/splashScreen/SplashScreen';
import { ScreenName, TabName } from './ScreenName';
import { RootStackParamList } from './Routes';
import Service from 'src/screens/home/SERVICE';


const RootStack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
   
      <RootStack.Navigator
        initialRouteName={ScreenName.SPLASHSCREEN}
      >
        <RootStack.Screen
          name={ScreenName.SPLASHSCREEN}
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen
          name={ScreenName.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={TabName.SERVICE}
          component={Service}
          options={{ headerShown: false }}
        />

    
      </RootStack.Navigator>
 
  );
};

export default MainStack;
