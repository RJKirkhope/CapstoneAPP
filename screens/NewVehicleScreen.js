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
import { FormLabel, FormInput, FormValidationMessage,Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewVehicleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
    <View style={styles.container}>
    <View> <Text style = {styles.textStyleHeader}> New Vehicle </Text> </View>
    <Text style = {styles.textStyle}> Use this form to create a new vehicle to add to your garage.</Text>
<View>

<FormLabel>Make</FormLabel>
<FormInput />
<FormLabel>Model</FormLabel>
<FormInput />
<FormLabel>Year</FormLabel>
<FormInput />
<FormLabel>Color</FormLabel>
<FormInput />
<FormValidationMessage></FormValidationMessage>
</View>
{/* <TouchableOpacity>
<Text> Add to Garage </Text>
      </TouchableOpacity>  */}
{/* </View> 

<View> */}
<Button 
 title='Add to Garage'
 buttonStyle={{
  marginLeft: 25,
  marginTop: 25,
  backgroundColor: "#E55812",
  width: 300,
  height: 45,
  borderColor: "transparent",
  borderWidth: 0,
  borderRadius: 5}}
 />

  </View> 
  )}
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
})
