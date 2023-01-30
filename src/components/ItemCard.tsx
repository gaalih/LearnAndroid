import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageBarang from './ImageBarang';

const ItemCard = () => {
  const arr = Array(5).fill(1);
  return (
    <View style={style.barang}>
      {arr.map((item: any, key: number) => (
        <View style={style.itemBarang} key={key}>
          <Text>Nama Barang</Text>
          <ImageBarang />
          <View style={style.button}>
            <Text style={{textAlign: 'center'}}>detail</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  barang: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    gap: 20,
  },
  itemBarang: {
    width: 160,
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
  button: {
    backgroundColor: '#22d3ee',
    borderRadius: 7,
    shadowColor: '#555',
    padding: 5,
    width: '100%',
  },
});

export default ItemCard;
