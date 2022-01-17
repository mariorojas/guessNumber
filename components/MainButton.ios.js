import React from 'react';
import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Colors from '../constants/colors';

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'OpenSans',
  },
});

export default MainButton;