import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height: height * 0.25,
    borderWidth: 1,
    borderColor: '#cfd8dc',
  },
})