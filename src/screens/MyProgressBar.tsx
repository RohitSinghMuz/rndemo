import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyProgressBar = () => {
    return (
        <View style={styles.container}>
            <Text>My Progress Bar Screen</Text>
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

export default MyProgressBar;
