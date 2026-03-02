
import { ScrollView, StatusBar, useColorScheme,Text } from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import PieChartData from './src/screens/PieChartData';
import MyProgressBar from './src/screens/MyProgressBar';
import FontStyles from 'src/assets/stylesheets/FontStyles';
import MyProgressChart from 'src/screens/home/MyProgressChart';
import MyCircularProgress from 'src/screens/home/MyCircularProgress';
import SalesDashboard from 'src/screens/home/SalesDashboard';
import TopCategoryScreen from 'src/screens/home/opCategoryScreen';
import BusinessScreen from 'src/progressbar/BusinessScreen';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text  >Rohit Singh</Text>
      <ScrollView>
     
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
