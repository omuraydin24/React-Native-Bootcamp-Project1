import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Badge.style"

const Filter = ({byAscendingPrice, byDescendingPrice, byDate}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={byAscendingPrice}>
        <Text style={styles.buttonText}>
          Artan Fiyat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={byDescendingPrice}>
        <Text style={styles.buttonText}>
          Azalan Fiyat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={byDate}>
        <Text style={styles.buttonText} >
          Tarih
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Filter;