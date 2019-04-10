import React, {Component} from 'react';
import Overview from './app/views/overview';
import {View} from 'react-native';

interface Props {}
export default class App extends Component<Props> {
  render() {
	return (
		<View>
	  		<Overview/>
		</View>
	);
  }
}