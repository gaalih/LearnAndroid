import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import ItemCard from './components/ItemCard';
import {fetchItem} from './lib/utils';
import Loading from './components/Loading';
import Error from './components/Error';

const App = () => {
  const [itemShow, setItemShow] = useState(6);
  const [textLoad, setTextLoad] = useState('');

  const {data, isLoading, isError} = fetchItem(itemShow);
  // const [items, setItems] = useState(data);
  // if (isLoading) return <Loading />;
  // if (isError) return <Error />;
  return (
    <View>
      <ScrollView
        onMomentumScrollEnd={({nativeEvent}) => {
          setTextLoad('Load More...');
          setTimeout(() => {
            const total = data?.total;
            setItemShow(itemShow * 2 >= total ? total : itemShow * 2);
            setTextLoad(itemShow * 2 >= total ? '- Last Data -' : '');
          }, 2000);
        }}>
        <Header />
        <View style={style.content}>
          <Text style={{marginBottom: 10}}>List Barang : </Text>
          <ItemCard data={data} />
          <Text style={{textAlign: 'center', padding: 20}}>{textLoad}</Text>
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
