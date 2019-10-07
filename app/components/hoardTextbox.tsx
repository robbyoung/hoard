import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { white, lightColor, black, warning } from '../styles';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		margin: 5,
		padding: 5,
		backgroundColor: lightColor,
		borderRadius: 5,
	},
	title: {
		textAlign: 'right',
		fontSize: 22,
		fontWeight: 'bold',
		marginRight: 3,
		color: black,
	},
	textField: {
		paddingTop: 1,
		paddingBottom: 1,
		fontSize: 20,
		color: black,
		backgroundColor: white,
		borderRadius: 5,
		marginLeft: 5,
		flex: 1,
	},
	error: {
		paddingTop: 1,
		paddingBottom: 1,
		fontSize: 20,
		color: black,
		backgroundColor: warning,
		borderRadius: 5,
		marginLeft: 5,
		flex: 1,
	},
});

interface HoardTextboxProps {
	title: string;
	value: string;
	placeholder?: string;
	numeric?: boolean;
	error?: boolean;
	hidden?: boolean;
	titleWidth?: number;
	onChange: (s: string) => void;
}
export default class HoardTextbox extends Component<HoardTextboxProps> {
	public render(): JSX.Element {
		if (this.props.hidden) {
			return <View />;
		}
		return (
			<View style={styles.row}>
				<Text style={styles.title}>{this.props.title}</Text>
				<TextInput
					value={this.props.value}
					placeholder={this.props.placeholder}
					onChangeText={(s: string): void => this.props.onChange(s)}
					style={this.props.error ? styles.error : styles.textField}
					keyboardType={this.props.numeric ? 'numeric' : 'default'}
				/>
			</View>
		);
	}
}
