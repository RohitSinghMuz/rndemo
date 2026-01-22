import Dimension from "./Dimension";
import { AppChartConfig } from "../types/chartConfig";

export const chartConfig: AppChartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 0,
  barPercentage: 0.6,

  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

  propsForLabels: {
    fontSize: Dimension.n(12),
  },
};
