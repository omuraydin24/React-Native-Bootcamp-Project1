import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    padding: 5,
    alignItems: 'center',
  },

  nameText: {
    fontSize: 17,
    marginLeft: 5,

  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    marginRight: 5,

  }

})