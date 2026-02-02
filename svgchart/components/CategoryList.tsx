import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CategoryItem } from '../types/category';

interface Props {
  data: CategoryItem[];
}

const CategoryList: React.FC<Props> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.key}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <View style={styles.left}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text>{item.label}</Text>
          </View>
          <Text>{item.avgMonthlySales.toLocaleString()}</Text>
          <Text>{item.olys}%</Text>
        </View>
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text>Category</Text>
          <Text>Avg Monthly Sales</Text>
          <Text>OLYS</Text>
        </View>
      }
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#DDD',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
});
