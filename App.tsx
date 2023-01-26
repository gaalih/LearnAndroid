import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// const Comp = () => {
//   return <Text>ini dari component lain</Text>;
// };

// const Photo = () => {
//   return (
//     <Image
//       source={{uri: 'https://placeimg.com/100/100/animals'}}
//       style={{width: 100, height: 100, borderRadius: 100}}
//     />
//   );
// };

const ImgBarang = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/150/150/tech'}}
      style={{width: '100%', height: 150, borderRadius: 10}}
    />
  );
};
const App = () => {
  return (
    <View>
      <View style={style.hero}>
        <Text
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: 7,
            fontSize: 20,
            fontWeight: '600',
          }}>
          Inventory app
        </Text>
      </View>
      <View style={style.content}>
        <Text>List Barang : </Text>
        <View style={style.barang}>
          <View style={style.itemBarang}>
            <Text>Nama Barang</Text>
            <ImgBarang />
            <View style={style.button}>
              <Text style={{textAlign: 'center'}}>detail</Text>
            </View>
          </View>
        </View>
        {/* <Photo />
        <Text>Hello</Text>
        <Comp />
        <TextInput style={style.textInput} /> */}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    backgroundColor: '#f1f5f9',
    width: '100%',
    height: '100%',
    padding: 20,
    display: 'flex',
    gap: 5,
  },
  hero: {
    width: '100%',
    height: 200,
    backgroundColor: '#7dd3fc',
    display: 'flex',
    justifyContent: 'center',
  },
  barang: {
    width: '100%',
    height: 'auto',
    display: 'flex',
  },
  itemBarang: {
    width: '50%',
    backgroundColor: '#f8fafc',
    display: 'flex',
    borderRadius: 10,
    gap: 10,
    padding: 15,
    shadowColor: '#aaa',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  textInput: {
    width: '50%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#aaa',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#22d3ee',
    borderRadius: 7,
    shadowColor: '#555',
    padding: 5,
    width: '100%',
  },
});

export default App;
