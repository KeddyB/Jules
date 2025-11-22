import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

interface GameCardProps {
  title: string;
}

export default function GameCard({ title }: GameCardProps) {
  const handlePress = () => {
    Alert.alert(`Starting ${title}...`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderWidth: 2,
    borderColor: '#f9a825',
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#fff9c4',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c62828',
  },
});
