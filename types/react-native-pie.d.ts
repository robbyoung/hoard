import { Component } from "react";

interface PieProps {
	series: number[],
	colors: string[],
	radius: number,
	innerRadius?: number,
	backgroundColor?: string,
}

export = Pie;
declare class Pie extends Component<PieProps> {}
