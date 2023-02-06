import React from 'react';
import {ListRenderItem} from 'react-native';
import {Container, ItemContainer, ItemName, UsersList} from './styles/style';

export interface IUser {
  id: string;
  name: string;
}

const DATA = [
  {
    id: '1',
    name: 'Michael Scott',
  },
  {
    id: '2',
    name: 'Jim Halpert',
  },
  {
    id: '3',
    name: 'Pam Beesly',
  },
  {
    id: '4',
    name: 'Dwight Schrute',
  },
  {
    id: '5',
    name: 'Andy Bernard',
  },
  {
    id: '6',
    name: 'Ryan Howard',
  },
  {
    id: '7',
    name: 'Kelly Kapoor',
  },
  {
    id: '8',
    name: 'Toby Flenderson',
  },
  {
    id: '9',
    name: 'Stanley Hudson',
  },
  {
    id: '10',
    name: 'Phyllis Vance',
  },
];

const Item = ({data}: {data: IUser}) => (
  <ItemContainer>
    <ItemName>{data.name}</ItemName>
  </ItemContainer>
);

const App = () => {
  const renderItem: ListRenderItem<IUser> = ({item}) => <Item data={item} />;

  return (
    <Container>
      <UsersList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: IUser) => item.id}
        numColumns={3}
      />
    </Container>
  );
};

export default App;
