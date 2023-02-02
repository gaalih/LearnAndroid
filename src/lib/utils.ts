// import Axios from 'axios';
import Axios from 'axios';
import UseSWR from 'swr';
const fetcher = (url: any) => fetch(url).then(res => res.json());

export function currencyFormat(num: any) {
  return '$ ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
export function fetchItem(itemShow: number) {
  const {data, error} = UseSWR(
    `https://dummyjson.com/products?limit=${itemShow}`,
    fetcher,
    {
      refreshInterval: 6000,
    },
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function getUsers(page: number, total: number) {
  Axios.get(`https://randomuser.me/api/?page=${page}&results=${total}`).then(
    res => {
      return {
        data: res,
      };
    },
  );
}
