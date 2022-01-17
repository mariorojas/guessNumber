import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
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
    height: Dimensions.get('window').width * 0.7,
    borderColor: '#000',
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    marginVertical: Dimensions.get('window').height / 30,
    overflow: 'hidden',
    width: Dimensions.get('window').width * 0.7,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
    fontSize: Dimensions.get('window').height < 400 ? 60 : 20,
    textAlign: 'center',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default GameOverScreen;