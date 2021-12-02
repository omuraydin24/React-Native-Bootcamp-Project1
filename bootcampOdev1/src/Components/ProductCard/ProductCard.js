import React from 'react';
import { View, Text } from "react-native";
import styles from "./ProductCard.style"

function ProductCard({ product }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>
        {product.name}
      </Text>
      <Text style={styles.priceText}>
        {product.price} TL
      </Text>
    </View>
  )
}

export default ProductCard;
