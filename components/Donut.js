import Reaact, { useState, useEffect } from "react";
import { curentDataFetch } from "../data/";
import { Doughnut } from "react-chartjs-2";

const Donut = () => {
	const [todayData, setTodayData] = useState([]);
	useEffect(() => {
		const dataFetch = async () => {
			setTodayData(await curentDataFetch());
		};
		console.log(todayData);
		dataFetch();
	}, []);

	return (
		<article className="donut_flex">
			<Doughnut
				data={{
					labels: ["Tested", "Infected", "Recovered", "Deaths"],
					datasets: [
						{
							data: [
								todayData.map(({ tests }) => tests),
								todayData.map(({ cases }) => cases),
								todayData.map(({ recovered }) => recovered),
								todayData.map(({ deaths }) => deaths),
							],
							backgroundColor: ["#36A2EB", "#F3C052", "#81C5A3", "#D71B53"],
							hoverBackgroundColor: [
								"#36A2EB",
								"#F3C052",
								"#81C5A3",
								"#D71B53",
							],
						},
					],
				}}
			/>
		</article>
	);
};

export default Donut;
