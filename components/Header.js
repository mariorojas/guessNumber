import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase, 
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}>
      <TitleText style={styles.title}>
        {props.title}
      </TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerBase: {
    alignItems: 'center',
    height: 90,
    justifyContent: 'center',
    paddingTop: 36,
    width: '100%',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  title: {
    color: Platform.OS == 'ios' ? Colors.primary : 'white',
  },
});

export default Header;