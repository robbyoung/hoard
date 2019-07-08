import React, { Component } from 'react';
import { Unsubscribe } from 'redux';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import FontAwesome from 'react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getCategoryIcon } from '../../utils/iconHelpers';
import store from '../../store';
import { ActionType } from '../../reducers/actions';
import { SetItemToEditAction } from '../../reducers/editItem';
import { NavigateToEditItem } from '../editItemScreen/editItem.nav';
import { Inventory } from '../../state';
import ItemAttribute from './itemAttribute';
import {
	ItemDetailsNavigationParams,
	extractItemDetailsParams,
} from './itemDetails.nav';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
	},
	attributes: {
		margin: 10,
		padding: 5,
		borderRadius: 5,
		backgroundColor: '#f2f2f2',
	},
	icon: {
		marginTop: 5,
		marginRight: 5,
		fontSize: 22,
	},
	category: {
		fontSize: 22,
	},
});

interface ItemDetailsState {
	item: Inventory;
}
export default class ItemDetails extends Component<
	NavigationInjectedProps,
	ItemDetailsState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;
	private params: ItemDetailsNavigationParams = extractItemDetailsParams(
		this.props.navigation,
	);
	public static navigationOptions = {
		title: 'Details',
	};

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe((): void => this.refreshState());
		this.refreshState();
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	private attributeList = this.params.item.attributes.map(
		(attribute): JSX.Element => (
			<ItemAttribute attribute={attribute} key={attribute.name} />
		),
	);
	public render(): JSX.Element {
		return (
			<View>
				<Text style={styles.title}>{this.params.item.name}</Text>
				<View style={styles.row}>
					<FontAwesome style={styles.icon}>
						{getCategoryIcon(this.params.item.category)}
					</FontAwesome>
					<Text style={styles.category}>
						{this.params.item.category}
					</Text>
				</View>
				<View style={styles.attributes}>{this.attributeList}</View>
				<TouchableOpacity
					onPress={(): void => {
						const editItem: SetItemToEditAction = {
							type: ActionType.SetItemToEdit,
							newItem: this.params.item,
						};
						store.dispatch(editItem);
						NavigateToEditItem(this.props.navigation, {});
					}}>
					<Text>Edit</Text>
				</TouchableOpacity>
			</View>
		);
	}

	private refreshState(): void {
		this.setState(store.getState().editItem);
	}
}
