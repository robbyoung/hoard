import { Unsubscribe } from 'redux';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icons } from 'react-native-fontawesome';
import React from 'react';
import store from '../../store';
import createHeader from '../overviewScreen/headerIcons';
import { NavigationOptionsWithProps } from '../../aliases';

export const styles = StyleSheet.create({});

interface EditCategoryState {
	categoryName: string;
}
export default class EditCategory extends Component<
	NavigationInjectedProps,
	EditCategoryState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;

	public static navigationOptions: NavigationOptionsWithProps = (): NavigationStackScreenOptions => {
		return createHeader('New Category', [
			{
				icon: Icons.check,
				callback: (): void => undefined,
			},
		]);
	};

	public state: EditCategoryState = {
		categoryName: '',
	};

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe((): void => undefined);
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	public render(): JSX.Element {
		return <View />;
	}
}
