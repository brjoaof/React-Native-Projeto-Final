import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  container1: {
    flexDirection: 'row',
    marginBottom: 0,
    padding: 5,
  },
  container2: {
    justifyContent: 'space-around',
  },
  image: {
    height: 150,
    width: 150,
  },
  container3: {
    flex: 1,
    marginLeft: 5,
    justifyContent: 'space-around',
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Alegreya-Regular',
  },
  texto1: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Alegreya-Black',
  },
  texto2: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Alegreya-Regular',
  },
  container4: {
    borderRadius: 10,
    marginHorizontal: 35,
    backgroundColor: '#24e00b',
  },
  texto3: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Alegreya-Bold',
  },
  container5: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#36065b',
    borderTopWidth: 2,
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
});
export default styles;
