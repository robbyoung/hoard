import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import store from '../../store';
import { ActionType } from '../../reducers/actions';
import { Attribute } from '../../state';
import { styles } from './editItem';

const SELECT_CATEGORY_TEXT = 'Pick One';

interface CategoryPickerProps {
	chosenCategory: string;
}
interface CategoryPickerState {
	pickerItems: JSX.Element[];
}
export default class CategoryPicker extends Component<
	CategoryPickerProps,
	CategoryPickerState
> {
	public state = {
		pickerItems: this.getCategoryPickerItems(),
	};

	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.key}>Category</Text>
				<Picker
					style={styles.categoryPicker}
					selectedValue={this.props.chosenCategory}
					onValueChange={(categoryName): void => {
						const category = store.getState().categories[
							categoryName
						];

						const attributes: Attribute[] = category
							? category.attributes
							: [];
						store.dispatch({
							type: ActionType.EditItemCategory,
							categoryName,
							attributes,
						});
					}}>
					<Picker.Item
						label={SELECT_CATEGORY_TEXT}
						value={SELECT_CATEGORY_TEXT}
						key={-1}
					/>
					{this.state.pickerItems}
				</Picker>
			</View>
		);
	}

	private getCategoryPickerItems(): JSX.Element[] {
		const categories = store.getState().categories;
		const categoryPickerItems = Object.keys(categories).map(
			(name, i): JSX.Element => (
				<Picker.Item label={name} value={name} key={i} />
			),
		);
		return categoryPickerItems;
	}
}
