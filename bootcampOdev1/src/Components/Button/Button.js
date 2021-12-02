import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Button.style'

export default function Button({ onClick }) {

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}
        onPress={onClick}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

