import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
// import ItemCard from './components/ItemCard';
// import {getUsers} from './lib/utils';
import Axios from 'axios';

// import Loading from './components/Loading';
// import Error from './components/Error';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    await Axios.get(
      `https://randomuser.me/api/?page=${currPage}&results=10`,
    ).then(res => {
      setUsers([...users, ...res.data.results]);
      setIsLoading(false);
    });
  };

  const renderItem = ({item}: any) => {
    return (
      <View>
        <Image
          source={{uri: item.picture?.thumbnail}}
          style={{width: 100, height: 100, borderRadius: 10}}
        />
        <Text>
          {item.name.first} {item.name.last}
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

  useEffect(() => {
    getUsers();
  }, [currPage]);

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.email}
      ListFooterComponent={renderLoader}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={0}
    />
  );
  // return (
  //   <View>
  //     <ScrollView>
  //       <Header />
  //       <View style={style.content}>
  //         <Text style={{marginBottom: 10}}>List Barang : </Text>
  //         {/* <ItemCard data={data} /> */}
  //         <FlatList
  //           data={users}
  //           renderItem={renderItem}
  //           // keyExtractor={item => item.email}
  //         />
  //       </View>
  //     </ScrollView>
  //   </View>
  // );
};

const style = StyleSheet.create({
  content: {
    backgroundColor: '#f1f5f9',
    width: '100%',
    height: '100%',
    minHeight: '100%',
    padding: 20,
    display: 'flex',
    gap: 5,
  },
});

export default App;
