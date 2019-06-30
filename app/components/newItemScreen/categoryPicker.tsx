import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import store from '../../store';
import { ActionType } from '../../reducers/actions';
import { styles} from './newItem';

const SELECT_CATEGORY_TEXT = "Pick One"

interface CategoryPickerProps {
	chosenCategory: string;
}
interface CategoryPickerState {
	pickerItems: JSX.Element[];
}
export default class CategoryPicker extends Component<CategoryPickerProps, CategoryPickerState> {

	public static navigationOptions = {
		title: 'New Item',
	};

	public state = {
		pickerItems: this.getCategoryPickerItems(),
	}

	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.heading}>Category:</Text>
				<Picker style={styles.inputField}
						selectedValue={this.props.chosenCategory}
						onValueChange={(categoryName) => {
							const attributes = store.getState().categories[categoryName] || [];
							store.dispatch({
								type: ActionType.SetNewItemCategory,
								categoryName,
								attributes,
							});
						}}>
					<Picker.Item label={SELECT_CATEGORY_TEXT} value={SELECT_CATEGORY_TEXT} key={-1}></Picker.Item>
					{this.state.pickerItems}
				</Picker>
			</View>
		);
	}

	private getCategoryPickerItems() {
		const categories = store.getState().categories;
		const categoryPickerItems = Object.keys(categories).map((name, i) => (
			<Picker.Item label={name} value={name} key={i}></Picker.Item>
		));
		return categoryPickerItems
	}
}
