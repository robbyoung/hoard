import { StyleSheet } from 'react-native';

export const white = '#ffffff';
export const lightColor = '#f2f2f2';
export const darkColor = '#228b22';
export const black = '#585858';
export const warning = '#ab280a';

const globalStyles = StyleSheet.create({
	header: {
		backgroundColor: darkColor,
	},
});

export const headerStyle = globalStyles.header;
