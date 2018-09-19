import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/wheel.png')}
              style={styles.homeImage}
            />
          </View>
          <View>
          <Text style={styles.titleText}>
        Welcome to Garage Manager.
        </Text>
        </View>

          <View>

            <Text style={styles.subTitleText}></Text>


            <Text style={styles.subTitleText}>
            You have 13 vehicles in the garage.
            </Text>
          </View>

        </ScrollView>
<View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F5257',
  },
  titleText: {
    marginTop: 40,
    marginBottom: 40,
    color: '#E55812',
    fontSize: 40,
    lineHeight: 40,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  homeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 50,
  },
  subTitleText: {
    marginTop: 10,
    fontSize: 20,
    color: '#E55812',
    lineHeight: 24,
    textAlign: 'center',
  },
});
