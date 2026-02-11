import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BusinessItem } from '../types/business';

interface Props {
  data: BusinessItem[];
}

const BusinessProgressList: React.FC<Props> = ({ data }) => {
  const renderItem = ({ item }: { item: BusinessItem }) => {
    return (
      <View style={styles.row}>
        {/* Left icon */}
        <View style={styles.icon} />

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.percent}>{item.percentage}%</Text>
          </View>

          <View style={styles.progressBg}>
            <View
              style={[
                styles.progressFill,
                { width: `${item.percentage}%` },
              ]}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Business</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </View>
  );
};

export default BusinessProgressList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5C8A8',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#444',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#F1E3D3',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#444',
  },
  percent: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  progressBg: {
    height: 6,
    backgroundColor: '#EFE6DD',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#B08B6A',
    borderRadius: 4,
  },
});
