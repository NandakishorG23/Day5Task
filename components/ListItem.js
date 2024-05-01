import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListItem({ text }) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 5,
    borderColor: 'skyblue',
  },
});
