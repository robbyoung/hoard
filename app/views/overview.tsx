import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
export default class Overview extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.hello}>Hello, World!</Text>
			</View>
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
	hello: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});