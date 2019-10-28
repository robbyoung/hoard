import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { lightColor, black } from '../styles';

export const styles = StyleSheet.create({
	title: {
		width: '100%',
		fontSize: 30,
		textAlign: 'center',
		margin: '5%',
		marginTop: 10,
		marginBottom: 0,
		fontWeight: 'bold',
		color: black,
		backgroundColor: lightColor,
	},
});

interface HoardTitleboxProps {
	value: string;
	placeholder?: string;
	onChange: (s: string) => void;
	width?: number;
}
export default class HoardTitlebox extends Component<HoardTitleboxProps> {
	public render(): JSX.Element {
		return (
			<TextInput
				value={this.props.value}
				onChangeText={(value: string): void =>
					this.props.onChange(value)
				}
				placeholder={this.props.placeholder}
				style={[
					styles.title,
					{
						width: this.props.width
							? `${this.props.width}%`
							: '90%',
					},
				]}
			/>
		);
	}
}
