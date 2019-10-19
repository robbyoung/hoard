import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { lightColor, black, warning } from '../styles';

export const styles = StyleSheet.create({
    title: {
		width: '90%',
		fontSize: 30,
		textAlign: 'center',
		margin: '5%',
		marginTop: 10,
		marginBottom: 0,
		fontWeight: 'bold',
		color: black,
		backgroundColor: lightColor,
    },
    error: {
		paddingTop: 1,
		paddingBottom: 1,
		fontSize: 20,
		color: black,
		backgroundColor: warning,
		borderRadius: 5,
		marginLeft: 5,
		width: '48%',
	},
});

interface HoardTitleboxProps {
	value: string;
	placeholder?: string;
	error?: boolean;
	onChange: (s: string) => void;
}
export default class HoardTitlebox extends Component<HoardTitleboxProps> {
	public render(): JSX.Element {
		return (
			<View>
                <TextInput
                    value={this.props.value}
                    onChangeText={(value: string): void =>
                        this.props.onChange(value)
                    }
                    placeholder={this.props.placeholder}
                    style={styles.title}
                />
				</View>
		);
	}
}
