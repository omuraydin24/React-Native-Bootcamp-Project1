import React, { useState} from 'react';
import { View, Keyboard } from 'react-native';
import Button from '../Button';
import Input from "../Input"
import styles from './ProductInput.style';

const Productinput = ({ objectData }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleClick = () => {
    name && price && objectData(name, price)
    Keyboard.dismiss()
    setName("")
    setPrice("")
  }

  return (
    <View style={styles.container}>
      <Input onSubmit={setName} value={name} title={"Name"} placeholder={"İsim"} />
      <Input onSubmit={setPrice} value={price} title={"Price"} placeholder={"Fiyat"} type={"numeric"} />
      <Button onClick={handleClick} />
    </View>
  );
}

export default Productinput;