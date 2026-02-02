import React from 'react';
import { View, FlatList, Text } from 'react-native';
import DashboardCard from '../../components/DashboardCard';
import dashboardData from '../../data/dashboardData';

const DashboardScreen = () => {
  return (
    <View style={{ padding:12 }}>
      <FlatList
        data={dashboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DashboardCard item={item} />}
        // horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default DashboardScreen;
