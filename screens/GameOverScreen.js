import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source={require('../assets/success.png')}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg'}}
          resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>
        NEW GAME
      </MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    color: Colors.primary
  },
  image: {
    height:'100%',
    width: '100%',
  },
  imageContainer: {
    height: 300,
    borderColor: '#000',
    borderRadius: 150,
    borderWidth: 3,
    marginVertical: 30,
    overflow: 'hidden',
    width: 300,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default GameOverScreen;