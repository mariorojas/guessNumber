import React from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';

import Colors from '../constants/colors';

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.5} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'OpenSans',
  },
});

export default MainButton;