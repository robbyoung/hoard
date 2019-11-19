
import { StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, NavigationState, Route, TabBar } from 'react-native-tab-view';
import { Component } from 'react';
import React from 'react';
import { darkColor, white } from '../styles';

const styles = StyleSheet.create({
	tab: {
		color: white,
		backgroundColor: darkColor,
	},
	tabIndicator: {
		backgroundColor: white,
	}
});

export interface Tab {
	key: string;
	title: string;
	content: JSX.Element;
}
export interface HoardTabViewProps {
	index: number;
	tabs: Tab[];
	onTabChange: (index: number) => void;
}
export default class HoardTabView extends Component<HoardTabViewProps> {
	state = {
		index: 0,
		routes: [
			{ key: 'first', title: 'First' },
			{ key: 'second', title: 'Second' },
		],
	};

	public render() {
		return (
			<TabView
				navigationState={this.getNavigationState()}
				renderScene={SceneMap(this.getRoutes())}
				onIndexChange={index => this.props.onTabChange(index)}
				initialLayout={{ width: Dimensions.get('window').width }}
				renderTabBar={(props) =>
					<TabBar
						{...props}
						activeColor={white}
						inactiveColor={white}
						indicatorStyle={styles.tabIndicator}
						style={styles.tab}
					/>}
			/>

		);
	}

	private getNavigationState(): NavigationState<Route> {
		return {
			index: this.props.index,
			routes: this.props.tabs.map((tab: Tab): Route => {
				return {
					key: tab.key,
					title: tab.title,
				}
			}),
		}
	}

	private getRoutes(): { [key: string]: () => JSX.Element } {
		let routes: { [key: string]: () => JSX.Element } = {};
		this.props.tabs.forEach((tab: Tab): void => {
			routes[tab.key] = (): JSX.Element => tab.content;
		});
		return routes;
	}
}
