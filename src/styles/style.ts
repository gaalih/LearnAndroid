import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IUser} from '../App';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ItemContainer = styled.View`
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 100px;
  box-shadow
`;

export const ItemName = styled.Text`
  font-size: 10px;
`;

export const UsersList = styled(FlatList as new () => FlatList<IUser>)`
  padding: 5px;
`;
