
import { ScrollView, StatusBar, useColorScheme,Text } from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import PieChartData from './src/screens/PieChartData';
import MyProgressBar from './src/screens/MyProgressBar';
import MyProgressChart from './src/screens/MyProgressChart';
import MyCircularProgress from './src/screens/MyCircularProgress';
import DashboardScreen from './src/screens/DashboardScreen'; 
import SalesDashboard from './src/screens/SalesDashboard';
import TopCategoryScreen from './src/screens/opCategoryScreen';
import BusinessScreen from './src/progressbar/BusinessScreen';
import FontStyles from './src/utils/FontStyles';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{...FontStyles.montserratM14Black}}>Rohit Singh</Text>
      <ScrollView>
      <HomeScreen />
      <PieChartData/>
      <MyProgressBar progress={65} />
      <MyProgressChart/>
      <MyCircularProgress/>
      {/* <DashboardScreen/> */}
      <SalesDashboard/>
      <TopCategoryScreen/>
      <BusinessScreen/>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
