export interface AppChartConfig {
    backgroundGradientFrom: string;
    backgroundGradientTo: string;
  
    decimalPlaces?: number;
    barPercentage?: number;
  
    color: (opacity?: number) => string;
    labelColor?: (opacity?: number) => string;
  
    propsForLabels?: {
      fontSize?: number;
    };
  }
  