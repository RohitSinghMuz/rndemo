import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface Props {
  percent: number;
  color: string;
}

const SemiCircleGauge: React.FC<Props> = ({ percent, color }) => {
  return (
    <View style={styles.wrapper}>
      <AnimatedCircularProgress
        size={140}
        width={12}
        fill={percent}
        tintColor={color}
        backgroundColor="#E5E5E5"
        rotation={-100}
        arcSweepAngle={200}
        lineCap="round"
      >
        {() => (
          <Text style={[styles.percent, { color }]}>
            {percent}%
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default SemiCircleGauge;

const styles = StyleSheet.create({
  wrapper: {
    height: 90,
    overflow: 'hidden',
    alignItems: 'center',
    marginVertical: 8,
  },
  percent: {
    fontSize: 22,
    fontWeight: '700',
  },
});
