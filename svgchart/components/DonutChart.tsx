import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text as SvgText } from 'react-native-svg';
import { CategoryItem } from '../types/category';

const { width } = Dimensions.get('window');

interface Props {
  data: CategoryItem[];
}

const DonutChart: React.FC<Props> = ({ data }) => {
  const chartData = data.map(item => ({
    value: item.percentage,
    svg: { fill: item.color },
    key: item.key,
    label: item.label,
    percent: `${item.percentage}%`,
  }));

  /** INSIDE % LABELS */
  const PercentageLabels = ({ slices }: any) =>
    slices.map((slice: any, index: number) => {
      const { pieCentroid, data } = slice;

      return (
        <SvgText
          key={`percent-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="#FFF"
          fontSize={11}
          fontWeight="600"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {data.percent}
        </SvgText>
      );
    });

  /** OUTSIDE CATEGORY LABELS */
  const CategoryLabels = ({ slices }: any) =>
    slices.map((slice: any, index: number) => {
      const { labelCentroid, data } = slice;

      return (
        <SvgText
          key={`label-${index}`}
          x={labelCentroid[0]}
          y={labelCentroid[1]}
          fill="#555"
          fontSize={12}
          fontWeight="500"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {data.label}
        </SvgText>
      );
    });

  return (
    <View style={styles.wrapper}>
      <PieChart
        style={styles.chart}
        data={chartData}
        innerRadius={70}
        outerRadius={100}
        padAngle={0}
        sort={() => null}
        labelRadius={115}  
      >
        <PercentageLabels />
        <CategoryLabels />
      </PieChart>

     
      <View style={styles.center}>
        <Text style={styles.centerText}>Top</Text>
        <Text style={styles.centerText}>Category</Text>
      </View>
    </View>
  );
};

export default DonutChart;

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    height: 260,
    width: width,
  },
  center: {
    position: 'absolute',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
});
