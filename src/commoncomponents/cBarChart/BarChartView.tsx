import React from "react";
import { View, Dimensions as RNDimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { BarChartData } from "../../types/BarChart";
import styles from "./Style";
import Dimension from "../../utils/Dimension";
import { chartConfig } from "../../utils/chartConfig";
interface Props {
  data: BarChartData;
}

const screenWidth = RNDimensions.get("window").width;

const BarChartView: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={screenWidth - Dimension.n(32)}
        height={Dimension.n(260)}
        yAxisLabel=""        
        yAxisSuffix=""       
        fromZero
        showValuesOnTopOfBars
        chartConfig={chartConfig as any}
        style={styles.chart}
      />
    </View>
  );
};

export default BarChartView;