import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={style.hero}>
      <Text
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: 7,
          fontSize: 20,
          fontWeight: '600',
        }}>
        Inventory app
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  hero: {
    width: '100%',
    height: 200,
    backgroundColor: '#7dd3fc',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default Header;
