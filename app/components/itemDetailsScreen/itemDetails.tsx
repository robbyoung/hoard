import React, { Component } from 'react';
import { Unsubscribe } from 'redux';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import FontAwesome from 'react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getCategoryIcon } from '../../utils/iconHelpers';
import store from '../../store';
import { Screens } from '../../screens';
import { lightColor, white, headerStyle, darkColor, black } from '../../styles';
import { Inventory } from '../../state';
import { SetItemToEditAction } from '../../reducers/editItem';
import { ActionType } from '../../reducers/actions';
import ItemAttribute from './itemAttribute';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
		fontWeight: 'bold',
		color: black,
	},
	attributes: {
		margin: 10,
		padding: 5,
		borderRadius: 5,
		backgroundColor: lightColor,
	},
	icon: {
		marginTop: 5,
		marginRight: 5,
		fontSize: 22,
		color: darkColor,
	},
	category: {
		fontSize: 22,
		color: black,
	},
});

interface ItemDetailsState {
	item: Inventory;
	attributeList: JSX.Element[];
}
export default class ItemDetails extends Component<
	NavigationInjectedProps,
	ItemDetailsState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;
	public static navigationOptions = {
		title: 'Details',
		headerTintColor: white,
		headerStyle: headerStyle,
	};

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe((): void => this.refreshState());
		this.refreshState();
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	public render(): JSX.Element {
		return (
			<View>
				<Text style={styles.title}>{this.state.item.name}</Text>
				<View style={styles.row}>
					<FontAwesome style={styles.icon}>
						{getCategoryIcon(this.state.item.category)}
					</FontAwesome>
					<Text style={styles.category}>
						{this.state.item.category}
					</Text>
				</View>
				<View style={styles.attributes}>
					{this.state.attributeList}
				</View>
				<TouchableOpacity
					onPress={(): void => {
						const editItem: SetItemToEditAction = {
							type: ActionType.SetItemToEdit,
							newItem: this.state.item,
						};
						store.dispatch(editItem);
						this.props.navigation.navigate(Screens.EditItem);
					}}>
					<Text>Edit</Text>
				</TouchableOpacity>
			</View>
		);
	}

	private refreshState(): void {
		const state = store.getState();
		const itemId = state.editItem.item.id;
		const item = state.inventory.inventory.find(
			(inv): boolean => inv.id === itemId,
		);

		if (item === undefined) {
			throw new Error(`Selected inventory ${itemId} could not be found`);
		}

		this.setState({
			item,
			attributeList: item.attributes.map(
				(attribute): JSX.Element => (
					<ItemAttribute attribute={attribute} key={attribute.name} />
				),
			),
		});
	}
}
