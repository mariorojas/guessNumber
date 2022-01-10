import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText>
        {props.title}
      </TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 90,
    justifyContent: 'center',
    paddingTop: 36,
    width: '100%',
  },
});

export default Header;