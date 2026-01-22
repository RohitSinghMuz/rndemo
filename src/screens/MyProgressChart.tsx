import React from 'react';
import { View, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const MyProgressChart = () => {
  const data = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8] // progress as fraction (0-1)
  };

  return (
    <View>
      <ProgressChart
        data={data}
        width={screenWidth - 30}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2,
          useShadowColorFromDataset: false,
        }}
        hideLegend={false}
      />
    </View>
  );
};

export default MyProgressChart;
