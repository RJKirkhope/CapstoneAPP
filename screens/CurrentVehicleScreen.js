import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   AsyncStorage,
// } from 'react-native';


    import React, { Component } from 'react-native';
    import Accordion from 'react-native-collapsible/Accordion';
    
    const SECTIONS = [
      {
        title: 'First',
        content: 'Lorem ipsum...'
      },
      {
        title: 'Second',
        content: 'Lorem ipsum...'
      }
    ];
    
    class AccordionView extends Component {
      state = {
        activeSections: []
      };
    
      _renderSectionTitle = section => {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      };
    
      _renderHeader = section => {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
      };
    
      _renderContent = section => {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      };
    
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
    
      render() {
        return (
          <Accordion
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />
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
