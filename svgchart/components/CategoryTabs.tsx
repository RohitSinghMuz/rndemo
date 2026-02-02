import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const tabs = ['Category', 'Brand', 'MotherPack'];

const CategoryTabs = () => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, index === 0 && styles.activeTab]}
        >
          <Text style={[styles.text, index === 0 && styles.activeText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C9A27C',
    marginHorizontal: 6,
  },
  activeTab: {
    backgroundColor: '#C9A27C',
  },
  text: {
    fontSize: 12,
    color: '#C9A27C',
  },
  activeText: {
    color: '#FFF',
  },
});
