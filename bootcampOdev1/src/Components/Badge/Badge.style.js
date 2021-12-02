import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 15,
    margin: 10,
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    height: 25,
    backgroundColor: "#cfd8dc",
    borderWidth: 1,
    borderRadius: 5,
    width: width * 0.27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    height: 25,
    backgroundColor: "#455a64",
    borderWidth: 1,
    borderRadius: 5,
    width: width * 0.27,
    justifyContent: 'center',
    alignItems: 'center',

  },

  buttonText: {
    fontSize: 14,
  }
})