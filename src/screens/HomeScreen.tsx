import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChartData } from "../types/BarChart";
import BarChartView from "../component/BarChart/BarChartView";
import style from "./Style";


const HomeScreen: React.FC = () => {
  const barChartData: BarChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{ data: [40, 55, 30, 80, 60] }],
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Monthly Sales</Text>
      <BarChartView data={barChartData} />
    </View>
  );
};

export default HomeScreen;
