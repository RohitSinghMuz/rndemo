// app/navigation/Routes.ts

import {
    RootStackParamTypes,
  } from './ParamTypes';
  
  import { StackScreenProps } from '@react-navigation/stack';
  
  export type RootStackParamList = {
    SplashScreen: undefined;

    Login: RootStackParamTypes.LoginProps | undefined;
    Home: RootStackParamTypes.HomeProps;
    Service:undefined;
  };
  