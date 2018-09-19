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

export default class NewVehicleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
    <View style={styles.container}>
    <View> <Text style = {styles.textStyleHeader}> New Vehicle </Text> </View>
    <Text style = {styles.textStyle}> Use this form to create a new vehicle to add to your garage.</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#0F5257',
  },
  textStyle: {
    marginTop: 15,
    fontSize: 14,
    color: '#E55812',
    lineHeight: 14,
    textAlign: 'center',
  },
  textStyleHeader: {
    marginTop: 5,
    fontSize: 24,
    color: '#E55812',
    lineHeight: 24,
    textAlign: 'center',
  },
});
