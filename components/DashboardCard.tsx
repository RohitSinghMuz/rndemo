import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const DashboardCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>{item.title}</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <View style={styles.activeTab}>
          <Text style={styles.activeTabText}>NIM</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>F&B</Text>
        </View>
      </View>

      <View style={styles.gaugeWrapper}>
  <AnimatedCircularProgress
    size={120}
    width={12}
    fill={item.percent}
    tintColor={item.color}
    backgroundColor="#E5E5E5"
    rotation={-100}
    arcSweepAngle={200}
    lineCap="round"
  >
    {() => (
      <Text style={[styles.percent, { color: item.color }]}>
        {item.percent}%
      </Text>
    )}
  </AnimatedCircularProgress>
</View>

      <View style={styles.bottom}>
        <View>
          <Text style={styles.label}>Target</Text>
          <Text style={styles.value}>{item.target}</Text>
        </View>
        <View>
          <Text style={styles.label}>Achievement</Text>
          <Text style={styles.value}>{item.achievement}</Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  card: {
    width: 185,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding:12,
    marginRight: 16,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    marginLeft: 8,
  },
  activeTab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#C38B6E',
  },
  tabText: {
    fontSize: 12,
    color: '#777',
  },
  activeTabText: {
    fontSize: 12,
    color: '#FFF',
  },
  percent: {
    fontSize: 20,
    fontWeight: '700',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: '#888',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
  gaugeWrapper: {
    marginBottom: -30,
  }
});
