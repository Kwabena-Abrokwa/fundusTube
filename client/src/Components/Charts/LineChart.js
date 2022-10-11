import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ lineChartdata }) => {
	return (
		<div className="h-[30rem]">
			<Line data={lineChartdata} />
		</div>
	);
};

export default LineChart;
