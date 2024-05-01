import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AddItemForm from '../components/AddItemForm';
import ListItem from '../components/ListItem';

export default function App() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems(prevItems => [
      ...prevItems,
      { id: Math.random().toString(), text }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shopping List</Text>
      <AddItemForm onAddItem={addItem} />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItem text={item.text} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'skyblue',
    
  },
});