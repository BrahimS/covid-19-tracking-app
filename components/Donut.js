import Reaact, { useState, useEffect } from "react";
import { curentData } from "../data/";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
	labels: ["Red", "Green", "Yellow"],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};
const Donut = () => {
	const [todayData, setTodayData] = useState({});
	useEffect(() => {
		const fetchCurrentData = async () => {
			setTodayData(await curentData());
		};
		fetchCurrentData();
	});
	return (
		<article className="donut_flex">
			<h2>Donut chart</h2>
			<Doughnut data={data} />
		</article>
	);
};

export default Donut;
