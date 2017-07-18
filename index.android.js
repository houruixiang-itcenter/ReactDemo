'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

export default class ReactDemo extends Component {
  render() {
	let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <ScrollView>
          <Text style={{fontSize:20}}>Scroll me plz</Text>
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Text style={{fontSize:20}}>If you like</Text>
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Text style={{fontSize:20}}>Scrolling down</Text>
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Text style={{fontSize:20}}>What's the best</Text>
		  <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Text style={{fontSize:20}}>Framework around?</Text>
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Image source={pic} style={{width: 193, height: 110}} />
          <Text style={{fontSize:20}}>React Native</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactDemo', () => ReactDemo);