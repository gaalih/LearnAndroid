import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  // ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import Header from './components/Header';
// import ItemCard from './components/ItemCard';
// import {getUsers} from './lib/utils';
import Axios from 'axios';

// import Loading from './components/Loading';
// import Error from './components/Error';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    await Axios.get(
      `https://randomuser.me/api/?page=${currPage}&results=12`,
    ).then(res => {
      setUsers([...users, ...res.data.results]);
      setIsLoading(false);
    });
  };

  const RenderItem = ({data}: any) => {
    console.log(data);

    return (
      <View style={style.card}>
        <Image
          source={{uri: data.picture?.thumbnail}}
          style={{
            width: 80,
            height: 80,
            borderRadius: 10,
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        />
        <Text style={{fontSize: 10, width: 80, textAlign: 'center'}}>
          {data.name.first} {data.name.last}
        </Text>
        <Text style={{fontSize: 10, width: 80, textAlign: 'center'}}>
          +{data.cell}
        </Text>
      </View>
    );
  };

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'#999'} />
      </View>
    );
  };
  const loadMoreItems = () => {
    setCurrPage(currPage + 1);
  };

  const refreshData = () => {
    console.log('refresh data');

    setIsRefresh(true);
    setCurrPage(1);
    getUsers();
    setTimeout(() => {
      setIsRefresh(false);
    }, 500);
  };

  useEffect(() => {
    getUsers();
  }, [currPage]);

  return (
    <View style={style.container}>
      <FlatList
        data={users}
        renderItem={(item: any) => <RenderItem data={item.item} />}
        keyExtractor={(item: any) => item.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0}
        numColumns={3}
        refreshing={isRefresh}
        onRefresh={refreshData}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e2e8f0',
  },
  content: {
    backgroundColor: '#f1f5f9',
    width: '100%',
    height: '100%',
    minHeight: '100%',
    padding: 20,
    display: 'flex',
    gap: 5,
  },
  flatlist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    gap: 5,
    margin: 10,
    borderRadius: 15,
    width: 160,
    backgroundColor: '#f8fafc',
    shadowColor: '#aaa',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
});

export default App;
