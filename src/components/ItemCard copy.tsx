import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageBarang from './ImageBarang';
import {currencyFormat} from '../lib/utils';

interface ItemCardProps {
  data: any;
}

const ItemCard = ({data}: ItemCardProps) => {
  // const arr = Array(5).fill(1);
  return (
    <View style={style.barang}>
      {data?.products.map((item: any, key: number) => (
        <View style={style.itemBarang} key={key}>
          <Text style={{fontSize: 12}}>{item.title}</Text>
          <ImageBarang image={item.images[0]} />
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: 'red',
              textDecorationLine: 'line-through',
            }}>
            {currencyFormat(
              (item.price - item.price * item.discountPercentage).toFixed(2),
            )}
          </Text>
          <Text style={{fontSize: 13, fontWeight: '700', marginTop: -10}}>
            {currencyFormat(item.price.toFixed(2))}
          </Text>
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
