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
import VehicleList from './MyGarageScreen'

export default class NewVehicleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
    <View style={styles.container}>
    <View> <Text style = {styles.textStyleHeader}> New Vehicle </Text> </View>
    <Text style = {styles.textStyle}> Use this form to create a new vehicle to add to your garage.</Text>
    <ScrollView>
<View>
<FormLabel>Make</FormLabel>
<FormInput onChangeText={Make => this.setState({Make})}/>
<FormLabel>Model</FormLabel>
<FormInput onChangeText={Model => this.setState({Model})}/>
<FormLabel>Year</FormLabel>
<FormInput onChangeText={Year => this.setState({Year})}/>
<FormLabel>Color</FormLabel>
<FormInput onChangeText={Color => this.setState({Color})}/>
<FormLabel>Oil</FormLabel>
<FormInput onChangeText={Oil => this.setState({Oil})}/>
<FormLabel>Brakes</FormLabel>
<FormInput onChangeText={Brakes => this.setState({Brakes})}/>
<FormLabel>Air Filters</FormLabel>
<FormInput onChangeText={AirFilters => this.setState({AirFilters})}/>
<FormLabel>Spark Plugs</FormLabel>
<FormInput onChangeText={SparkPlugs => this.setState({SparkPlugs})}/>
<FormLabel>Wipers</FormLabel>
<FormInput onChangeText={Wipers => this.setState({Wipers})}/>
<FormLabel>Tires</FormLabel>
<FormInput onChangeText={Tires => this.setState({Tires})}/>
<FormLabel>Battery</FormLabel>
<FormInput onChangeText={Battery => this.setState({Battery})}/>
<FormLabel>Lights</FormLabel>
<FormInput onChangeText={Lights => this.setState({Lights})}/>
<FormLabel>Other</FormLabel>
<FormInput onChangeText={Other => this.setState({Other})}/>
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

 {/* <Button 
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
 onPress = {this.showData}/> */}
  </ScrollView>
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
    AsyncStorage.getItem('vehicles', (error, result) => {
      if(!result){
        vehicle.id=1
        AsyncStorage.setItem('vehicles', JSON.stringify([vehicle])).then(() => {
          this.props.navigation.push({
            title:'VehicleList',
            Component:'VehicleList'
          })
        })
      }
      else{ 
        let parsedVehicles = JSON.parse(result)
        vehicle.id = parsedVehicles.length + 1
        parsedVehicles.push(vehicle)
        AsyncStorage.setItem('vehicles', JSON.stringify(parsedVehicles)).then(() => {
          this.props.navigation.push({
            title:'VehicleList',
            Component: VehicleList
          })
        })
        .catch(err => console.error(err))
        alert ('New Vehicle Added To Garage')
      }
      if (error){
        alert('error')
      }
      
    }) 
  }
//  showData = async () => { AsyncStorage.clear()
//   } 
  
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
