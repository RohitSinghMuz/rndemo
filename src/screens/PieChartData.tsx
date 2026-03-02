import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PieChartData = () => {
    return (
        <View style={styles.container}>
            <Text>Pie Chart Data Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default PieChartData;
