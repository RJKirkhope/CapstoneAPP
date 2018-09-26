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

export default class HomeScreen extends React.Component {
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
    if(this.state.VList){
      return(
<View> 
<Text style={styles.dataText} > {this.state.VList.length} </Text>
</View>
  )}
    
    }

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
            You have{this.parseData()} vehicles in the garage.
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
    backgroundColor: '#24272B',
  },
  titleText: {
    marginTop: 40,
    marginBottom: 40,
    color: '#0F7173',
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
    color: '#0F7173',
    lineHeight: 24,
    textAlign: 'center',
  },
  dataText: {
    marginTop: 0,
    fontSize: 30,
    color: '#0F7173',
    lineHeight: 30,
    textAlign: 'center',
  },
});
