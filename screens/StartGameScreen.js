import React, { useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!', 
        'Number has to be a number between 1 and 99.', 
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText style={styles.text}>Select a Number</BodyText>
          <Input
            autoCapitalize='none'
            autoCorrect={false}
            blurOnSubmit
            keyboardType='numeric'
            maxLength={2}
            onChangeText={numberInputHandler}
            style={styles.input}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
  },
  input: {
    textAlign: 'center',
    width: 50,
  },
  inputContainer: {
    alignItems: 'center',
    maxWidth: '80%',
    width: 300,
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  summaryContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'OpenSans',
    color: 'red',
  },
  title: {
    fontFamily: 'OpenSansBold',
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;