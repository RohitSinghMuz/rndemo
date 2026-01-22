
import { ScrollView, StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import PieChartData from './src/screens/PieChartData';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
      <HomeScreen />
      <PieChartData/>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
