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
import { List, ListItem, Button, Left, Body, Right, Card } from 'react-native-elements'

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
          {<List containerStyle={{marginBottom: -15}}>
              <ListItem 
                key={data.id}
                title={data.Model}
                subtitle={data.Make}
                onPressRightIcon = {this.showAlert}
              />
        </List>}
          </View>
        ) 
      })
    )}

render() {
const Vdata = JSON.stringify(this.state.VList)
return (
  <View style={styles.container}>
  <View> <Text style = {styles.textStyleHeader}> My Garage </Text> </View>
  <Text style = {styles.textStyle}> Scroll through your vehicle cards, select which one you are currently working on.</Text>

  {this.parseData()}
  <Text> {Vdata} </Text>
  </View>
  )
}

showAlert(){
  alert('Why is this so hard to figure out?')
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
