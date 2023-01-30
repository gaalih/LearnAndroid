import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import ItemCard from './components/ItemCard';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Header />
        <View style={style.content}>
          <Text style={{marginBottom: 10}}>List Barang : </Text>
          <ItemCard />
        </View>
      </ScrollView>
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
});

export default App;
