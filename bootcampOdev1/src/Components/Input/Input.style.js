import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  input: {
    backgroundColor: "#eceff1",
    marginLeft: 10,
    marginRight: 10,
    margin: 2,
    padding: 2,
    display: "flex",
    width: width * 0.95,
    borderRadius: 5,
  },

  inputTitle: {
    marginLeft: 10,
    color: "black",
    marginTop: 10,
  },

})