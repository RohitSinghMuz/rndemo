
import { ScrollView, StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import PieChartData from './src/screens/PieChartData';
import MyProgressBar from './src/screens/MyProgressBar';
import MyProgressChart from './src/screens/MyProgressChart';
import MyCircularProgress from './src/screens/MyCircularProgress';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
      <HomeScreen />
      <PieChartData/>
      <MyProgressBar progress={65} />
      <MyProgressChart/>
      <MyCircularProgress/>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
