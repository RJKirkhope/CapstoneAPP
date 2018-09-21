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
import { List, ListItem } from 'react-native-elements'

export default class MyGarageScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  

  render() {
    return (
    <View style={styles.container}>
    <View> <Text style = {styles.textStyleHeader}> My Garage </Text> </View>
    <Text style = {styles.textStyle}> Scroll through your vehicle cards, select which one you are currently working on.</Text>
    <List containerStyle={{marginBottom: 20}}>
  {
    list.map((l) => (
      <ListItem
        key={l.Model}
        title={l.Model}
        subtitle={l.Make}
      />
    ))
  }
</List>
    </View>
    )
  }
}
AsyncStorage.getItem('vehicles')
.then((vehicles) => { 
  console.log(vehicles, 'On MyGarage');
});
const list = [
  {
    Make: 'Kawasaki',
    Model: 'KLR 650(2015)',
    Year: '2015',
    Color:'White'
  },
  {
    Make: 'Suzuki',
    Model: 'DR 650(2014)',
    Year: '2014',
    Color: 'Grey'
  },
  {
    Make:'Subaru',
    Model:'Crosstreck(2017)',
    Year: '2017',
    Color:'Dark Grey',
  },
  {
    Make:'Toyota',
    Model:'Camry(2000)',
    Year: '2000',
    Color:'Silver',
  },
  {
    Make:'Kawasaki',
    Model:'KLR 650(2008)',
    Year: '2008',
    Color:'Mostly Black',
  },
]

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

