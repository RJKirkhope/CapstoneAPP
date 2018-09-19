import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class CurrentVehicleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

<View> <Text style = {styles.textStyleHeader}> Current Vehicle </Text> </View>

      <ScrollView >
       <Text style = {styles.textStyle}> Make: </Text>
       <Text style = {styles.textStyle}> Model: </Text>
       <Text style = {styles.textStyle}> Year: </Text>
       <Text style = {styles.textStyle}> Oil: </Text>
       <Text style = {styles.textStyle}> Brakes: </Text>
       <Text style = {styles.textStyle}> Air Filters: </Text>
       <Text style = {styles.textStyle}> Spark Plugs: </Text>
       <Text style = {styles.textStyle}> Wipers: </Text>
       <Text style = {styles.textStyle}> Tires: </Text>
       <Text style = {styles.textStyle}> Brakes: </Text>
       <Text style = {styles.textStyle}> Battery: </Text>
       <Text style = {styles.textStyle}> Lights: </Text>
       <Text style = {styles.textStyle}> Other Notes: </Text>
      </ScrollView>

      </View>
    );
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
    marginTop: 15,
    fontSize: 24,
    color: '#E55812',
    lineHeight: 24,
    textAlign: 'center',
  },
});
