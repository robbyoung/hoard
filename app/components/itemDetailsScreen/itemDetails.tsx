import React, { Component } from 'react';
import { Unsubscribe } from 'redux';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import store from '../../store';
import { Screens } from '../../screens';
import { lightColor, darkColor, black } from '../../styles';
import { Inventory } from '../../state';
import { SetItemToEditAction } from '../../actions/SetItemToEdit';
import { ActionType } from '../../reducers/actions';
import createHeader from '../overviewScreen/headerIcons';
import ItemAttribute from './itemAttribute';
import { DeleteInventoryAction } from '../../actions/deleteInventory';

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
	public static navigationOptions = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		return createHeader('Details', [
			{
				icon: Icons.pencilAlt,
				callback: (): void => {
					const editItem: SetItemToEditAction = {
						type: ActionType.SetItemToEdit,
						newItem: ItemDetails.getSavedItemFromState(),
					};
					store.dispatch(editItem);
					props.navigation.navigate(Screens.EditItem);
				},
			},
			{
				icon: Icons.trash,
				callback: async (): Promise<void> => {
					const item = ItemDetails.getSavedItemFromState();
					if (item !== undefined && await ItemDetails.confirmDeletion()) {
						const deleteItem: DeleteInventoryAction = {
							type: ActionType.DeleteInventory,
							itemId: item.id,
						};
						props.navigation.goBack();
						store.dispatch(deleteItem);
					}
				},
			},
		]);
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
						{
							store.getState().categories[
								this.state.item.category
							].icon
						}
					</FontAwesome>
					<Text style={styles.category}>
						{this.state.item.category}
					</Text>
				</View>
				<View style={styles.attributes}>
					{this.state.attributeList}
				</View>
			</View>
		);
	}

	private refreshState(): void {
		const item = ItemDetails.getSavedItemFromState();
		if (item) {
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

	private static getSavedItemFromState(): Inventory | undefined {
		const state = store.getState();
		const itemId = state.editItem.id;
		const item = state.inventory.find((inv): boolean => inv.id === itemId);
		return item;
	}

	private static confirmDeletion(): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			Alert.alert(
				'Delete Inventory',
				'This item will be permanently deleted.',
				[{ text: 'Cancel', onPress: () => resolve(false)},
				{text: 'OK', onPress: () => resolve(true)}],
				{cancelable: true},
			);
		});
	}
}
