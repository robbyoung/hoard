import React, {Component} from 'react';
import Overview from './app/views/overview';

interface Props {}
export default class App extends Component<Props> {
  render() {
	return (
	  <Overview/>
	);
  }
}