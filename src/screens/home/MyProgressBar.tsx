import React from 'react';
import { View, StyleSheet } from 'react-native';

const MyProgressBar = ({ progress }:any) => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '90%',
    backgroundColor: '#e0e0de',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 20,
  },
  bar: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 10,
  },
});

export default MyProgressBar;
