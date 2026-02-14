import React from 'react';
import { View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const MyCircularProgress = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={75} // percentage
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      />
    </View>
  );
};

export default MyCircularProgress;
