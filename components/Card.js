import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 6,
  },
});

export default Card;