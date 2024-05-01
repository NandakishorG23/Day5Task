import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddItemForm({ onAddItem }) {
  const [text, setText] = useState('');

  const handleChangeText = (newText) => {
    setText(newText);
  };

  const handleAddItem = () => {
    if (!text.trim()) return;
    onAddItem(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new item..."
        value={text}
        onChangeText={handleChangeText}
      />
      <Button title="Add" onPress={handleAddItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'Brown',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
 
});
