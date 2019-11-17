
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Component } from 'react';
import React from 'react';

const FirstRoute = () => (
  <View style={styles.scene}><Text>One</Text></View>
);

const SecondRoute = () => (
	<View style={styles.scene}><Text>One</Text></View>
);

export interface HoardTabViewProps {

}

export default class HoardTabView extends Component<HoardTabViewProps> {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />

    );
  }
}

const styles = StyleSheet.create({
  scene: {
	flex: 1,
	backgroundColor: '#000000'
  },
});