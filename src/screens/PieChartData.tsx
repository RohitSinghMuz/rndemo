import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import style from './Style';
import { chartConfig } from '../utils/chartConfig';

const Data = [
  { label: 'Product A', value: 30 },
  { label: 'Product B', value: 50 },
  { label: 'Product C', value: 20 },
  { label: 'Product D', value: 40 },
  { label: 'Product E', value: 10 },
];

const PieChartData = () => {
  const screenWidth = Dimensions.get('window').width;

  const pieData = Data.map((item, index) => ({
    name: item.label,
    population: item.value,
    color: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'][index],
    legendFontColor: '#000',
    legendFontSize: 14,
  }));

  // LineChart expects a different data format
  const lineData = {
    labels: Data.map(item => item.label),
    datasets: [
      {
        data: Data.map(item => item.value),
      },
    ],
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Monthly Sales</Text>

      <PieChart
        data={pieData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="16"
        absolute
      />

      <LineChart
        data={lineData}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        fromZero
        style={{ marginTop: 32 }}
      />
    </View>
  );
};

export default PieChartData;
