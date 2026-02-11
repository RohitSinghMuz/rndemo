import React from 'react';
import { View, StyleSheet } from 'react-native';
import BusinessProgressList from './components/BusinessProgressList';
import { businessData } from './data/businessData';

const BusinessScreen = () => {
  return (
    <View style={styles.container}>
      <BusinessProgressList data={businessData} />
    </View>
  );
};

export default BusinessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
});
