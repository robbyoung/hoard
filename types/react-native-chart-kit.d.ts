import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface PieChartData {
	name: string,
	value: number,
	color: string,
	legendFontColor: string,
	legendFontSize: number,
}

export interface PieChartConfig {
	backgroundGradientFrom: string,
	backgroundGradientTo: string,
	color: (opacity: number) => string,
	strokeWidth?: number, // optional, default 3
}

export interface PieChartProps {
	data: PieChartData[],
	width: number
	height: number
	chartConfig: PieChartConfig,
	accessor: 'value',
	style?: StyleProp<ViewStyle>;
}

export declare class PieChart extends Component<PieChartProps> {}