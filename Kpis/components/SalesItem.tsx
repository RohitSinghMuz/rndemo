import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SemiCircleGauge from './SemiCircleGauge';
import { SalesItemType } from '../types/sales';

interface Props {
  item: SalesItemType;
}

const SalesItem: React.FC<Props> = ({ item }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <View style={styles.card}>
      {/* Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(prev => !prev)}
        activeOpacity={0.8}
      >
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.right}>
          <Text style={[styles.percent, { color: item.color }]}>
            {item.percent}%
          </Text>
          <Text style={styles.arrow}>{expanded ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>

      {/* Expanded View */}
      {expanded && (
        <View style={styles.body}>
          <SemiCircleGauge
            percent={item.percent}
            color={item.color}
          />

          <View style={styles.row}>
            <Info label="Target" value={item.target} />
            <Info label="Achievement" value={item.achievement} />
            <Info label="Balance to Go" value={item.balance} />
          </View>

          <View style={styles.row}>
            <Info label="Pickup" value={item.pickup} />
            <Info label="L3M Same Date Avg." value={item.l3mAvg} />
          </View>

          <Text style={styles.link}>
            View Distributor level split
          </Text>
        </View>
      )}
    </View>
  );
};

export default SalesItem;

/* Reusable Info block */
const Info = ({ label, value }: { label: string; value: string }) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2C39A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percent: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 6,
  },
  arrow: {
    fontSize: 14,
    color: '#666',
  },
  body: {
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  label: {
    fontSize: 12,
    color: '#777',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: '#2F6FED',
    fontWeight: '500',
  },
});
