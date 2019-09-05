import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-fontawesome';
import { white, darkColor } from '../../styles';

const styles = StyleSheet.create({
	header: {
		backgroundColor: darkColor,
	},
	headerButtonList: {
		flexDirection: 'row',
	},
	headerButton: {
		marginRight: 20,
		fontSize: 22,
		color: white,
	},
});

interface HeaderInfo {
	title: string;
	headerTintColor: string;
	headerStyle: { backgroundColor: string };
	headerRight: JSX.Element;
}

interface HeaderIconButton {
	icon: string;
	callback: () => void;
}

export default function createHeader(
	title: string,
	buttons: HeaderIconButton[],
): HeaderInfo {
	return {
		title,
		headerTintColor: white,
		headerStyle: styles.header,
		headerRight: <HeaderIcons buttons={buttons} />,
	};
}

interface HeaderIconProps {
	buttons: HeaderIconButton[];
}
class HeaderIcons extends Component<HeaderIconProps> {
	public render(): JSX.Element {
		const buttons = this.props.buttons.map(
			(button: HeaderIconButton, index: number): JSX.Element => {
				return (
					<TouchableOpacity key={index} onPress={button.callback}>
						<FontAwesome style={styles.headerButton}>
							{button.icon}
						</FontAwesome>
					</TouchableOpacity>
				);
			},
		);
		return <View style={styles.headerButtonList}>{buttons}</View>;
	}
}
