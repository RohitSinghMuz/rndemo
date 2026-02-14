import React from 'react';
import { View, FlatList } from 'react-native';
import { SalesItemType } from '../Kpis/types/sales';
import salesData from '../Kpis/data/salesData';
import SalesItem from '../Kpis/components/SalesItem';


const SalesDashboard: React.FC = () => {
  return (
    <View style={{ padding: 16 }}>
      <FlatList<SalesItemType>
        data={salesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SalesItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SalesDashboard;
