import React from 'react';
import {Image} from 'react-native';

const ImageBarang = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/150/150/tech'}}
      style={{width: '100%', height: 140, borderRadius: 10}}
    />
  );
};

export default ImageBarang;
