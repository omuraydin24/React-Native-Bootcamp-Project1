import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import Badge from "./Components/Badge";
import ProductInput from './Components/ProductInput';
import ProductCard from './Components/ProductCard';

import styles from './App.styles';

function App() {
  const [arrayData, setArrayData] = useState([]);

  const renderCard = ({ item }) => {
    return (
      <ProductCard product={item} />
    )
  }

  const handleInput = (name, price) => {
    const productData = { name: name, price: price, date: new Date() }
    setArrayData([...arrayData, productData])
  }
  console.log("arrayData", arrayData)

  const byAscendingPrice = () => {
    arrayData.sort((a, b) => a.price - b.price);
    setArrayData([...arrayData])
  }
  const byDescendingPrice = () => {
    arrayData.sort((a, b) => b.price - a.price);
    setArrayData([...arrayData])
  }
  const byDate = () => {
    arrayData.sort((a, b) => a.date - b.date);
    setArrayData([...arrayData])

  }

  return (
    <View style={styles.container}>
      <Badge byAscendingPrice={byAscendingPrice} byDate={byDate} byDescendingPrice={byDescendingPrice} />
      <FlatList
        data={arrayData}
        renderItem={renderCard}
      />
      <ProductInput objectData={handleInput} />
    </View >
  )
}

export default App;
