import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationInjectedProps } from 'react-navigation';
import { Category } from '../../state';
import { Screens } from '../../screens';
import store from '../../store';
import { ActionType } from '../../reducers/actions';
import { SetCategoryToEditAction } from '../../actions/setCategoryToEdit';
import { styles } from './overviewItem';

interface Props extends NavigationInjectedProps {
	name: string;
	category: Category;
}
export default class OverviewCategory extends Component<Props> {
	public render(): JSX.Element {
		return (
			<TouchableOpacity
				onPress={(): void => {
					const editItem: SetCategoryToEditAction = {
						type: ActionType.SetCategoryToEdit,
						name: this.props.name,
						category: this.props.category,
					};
					store.dispatch(editItem);
					this.props.navigation.navigate(Screens.EditCategory);
				}}>
				<View style={[styles.container]}>
					<FontAwesome style={styles.icon}>
						{this.props.category.icon}
					</FontAwesome>
					<Text style={styles.title}>{this.props.name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
