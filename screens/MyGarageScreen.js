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
import { List, ListItem, Button, Left, Body, hideChevron } from 'react-native-elements'

import VehicleList from './NewVehicleScreen'

export default class MyGarageScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(){
    super()
    this.state = {
      VList : ''
    }
    try{
      AsyncStorage.getItem('vehicles').then((vehicles) => { 
        this.setState({
          VList: JSON.parse(vehicles)
        })
      });
    } catch(err){
      console.log(err)
    }
  }
  parseData(){
    if(this.state.VList)
      return(this.state.VList.map((data, i) => {
        return(
          <View key = {data.id} >
          {<List containerStyle={{marginBottom: -30, minHeight: 40, backgroundColor:'#3A8A8C', borderColor: 'transparent',}}>
              <ListItem 
                key={data.id}
                title={data.Make + ' ' + data.Model + ' ' + data.Color +' '+ data.Year}
                hideChevron
              />
        </List>}

<Text style= {styles.textContainer} >Oil: {data.Oil} </Text> 
<Text style= {styles.textContainer2} >Brakes: {data.Brakes} </Text>
<Text style= {styles.textContainer2} >Air Filters: {data.AirFilters}</Text>
<Text style= {styles.textContainer2} >Spark Plugs: {data.SparkPlugs}</Text>
<Text style= {styles.textContainer2} >Wipers: {data.Wipers}</Text>
<Text style= {styles.textContainer2} >Tires: {data.Tires}</Text>
<Text style= {styles.textContainer2} >Battery: {data.Battery}</Text>
<Text style= {styles.textContainer2} >Lights: {data.Lights}</Text>
<Text style= {styles.textContainer2} >Other: {data.Other}</Text>
<View style = {styles.buttonContainer}>
<View style = {styles.buttonContainer}>
<TouchableOpacity onPress={this.updateAlert} style = {styles.buttonStyle}>
<Text> Edit Vehicle </Text>
    </TouchableOpacity>

    <TouchableOpacity onLongPress={this.deleteAlert} style = {styles.buttonStyle}>
      <Text> Delete Vehicle </Text>
    
    </TouchableOpacity>
</View>
</View>
          </View>
          
        ) 
      })
    )}
deleteAlert(){
  alert('This Vehicle will be removed from Your Garage.') 
}
updateAlert(){
  alert('This Vehicle was updated.')
}

render() {
const Vdata = JSON.stringify(this.state.VList)
return (
  <View style={styles.container}>
  <ScrollView>
  <View> <Text style = {styles.textStyleHeader}> My Garage </Text> </View>
  <Text style = {styles.textStyle}> Scroll through your vehicle cards, select which one you are currently working on.</Text>

  {this.parseData()}
  </ScrollView>
  </View>
  )
}


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#24272B',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    marginTop: 15,
    fontSize: 14,
    color: '#3A8A8C',
    lineHeight: 14,
    textAlign: 'center',
  },
  textStyleHeader: {
    marginTop: 15,
    fontSize: 24,
    color: '#3A8A8C',
    lineHeight: 24,
    textAlign: 'center',
  },
  textContainer:{
    marginTop: 35,
    fontSize:20,
    color: '#3A8A8C',
    lineHeight:20,
  },
  textContainer2:{
    marginTop: 5,
    fontSize:20,
    color: '#3A8A8C',
    lineHeight:20,
  },
  buttonStyle:{
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: "#0F7173",
    width: 100,
    height: 20,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5},
});
