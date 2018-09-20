import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
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
<FormInput onChangeText={Make => this.setState({Make})}/>
<FormLabel>Model</FormLabel>
<FormInput onChangeText={Model => this.setState({Model})}/>
<FormLabel>Year</FormLabel>
<FormInput onChangeText={Year => this.setState({Year})}/>
<FormLabel>Color</FormLabel>
<FormInput onChangeText={Color => this.setState({Color})}/>
<FormValidationMessage></FormValidationMessage>
<View>
<Text> {this.state.storedData} </Text>
  </View>
</View>

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
 onPress = {this.saveData}/>

 <Button 
 title='Show Data'
 buttonStyle={{
  marginLeft: 25,
  marginTop: 25,
  backgroundColor: "#E55812",
  width: 300,
  height: 45,
  borderColor: "transparent",
  borderWidth: 0,
  borderRadius: 5}}
 onPress = {this.showData}/>
  </View> 
  )}
  constructor(props){
    super(props)
    this.state={
      Make:'',
      Model:'',
      Year:'',
      Color:'',
      Oil: '',
      Brakes:'',
      AirFilters:'',
      SparkPlugs:'',
      Wipers:'',
      Tires:'',
      Battery:'',
      Lights:'',
      Other:'',
    }
  }
  saveData =() => {
    const {Make,Model,Year,Color} = this.state

    let vehicle={
      Make: Make,
      Model: Model,
      Year: Year,
      Color: Color
    }
    AsyncStorage.setItem('vehicle', JSON.stringify(vehicle))
  }

  showData = async () => {
    try{
let vehicle = await AsyncStorage.getItem('vehicle')
let parsed = JSON.parse(vehicle)
alert(parsed.Make + ' ' + parsed.Model + ' ' + parsed.Year + ' ' + parsed.Color + ' ' + 'Has been added to your garage')
    }
    catch(error){
alert(error)
    }
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
})
