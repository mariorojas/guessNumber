import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  }
});

export default NumberContainer;