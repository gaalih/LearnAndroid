import React from 'react';
import {Image} from 'react-native';

interface ImageBarangProps {
  image: string;
}
const ImageBarang = ({image}: ImageBarangProps) => {
  return (
    <Image
      source={{uri: image}}
      style={{width: '100%', height: 100, borderRadius: 10}}
    />
  );
};

export default ImageBarang;
