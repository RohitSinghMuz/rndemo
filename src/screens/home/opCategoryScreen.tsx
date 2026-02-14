import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryTabs from '../../svgchart/components/CategoryTabs';
import DonutChart from '../../svgchart/components/DonutChart';
import { categoryData } from '../../svgchart/data/categoryData';
import CategoryList from '../../svgchart/components/CategoryList';


const TopCategoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <CategoryTabs />
      <DonutChart data={categoryData} />
      <CategoryList data={categoryData} />
    </View>
  );
};

export default TopCategoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    flex: 1,
  },
});
