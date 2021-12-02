import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({

  button: {
    backgroundColor: "#455a64",
    width: width * 0.95,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 5,
    marginTop: 10,

  },
  buttonText: {
    color: "white",

  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  }
})
