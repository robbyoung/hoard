import React, {Component} from 'react';
import Overview from './views/overview';
import {View} from 'react-native';

interface Props {}
export class App extends Component<Props> {
  render() {
	return (
		<View>
	  		<Overview/>
		</View>
	);
  }
}