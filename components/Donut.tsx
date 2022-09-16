import React from "react";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "../types/index";

declare namespace JSX {
	interface IntrinsicElements {
		Doughnut: any;
	}
}

const Donut: React.FC = ({
	data: { cases, recovered, deaths },
}: ChartData): JSX.IntrinsicElements => {
	return (
		<article className="donut_flex">
			<Doughnut
				data={{
					labels: ["Infected", "Recovered", "Deaths"],
					datasets: [
						{
							data: [cases, recovered, deaths],
							backgroundColor: ["#F3C052", "#81C5A3", "#ff0000"],
							hoverBackgroundColor: ["#F3C052", "#81C5A3", "#ff0000"],
							borderColor: "#000050",
						},
					],
				}}
				width={600}
				height={400}
				options={{
					maintaineAspectRatio: true,
					legend: {
						display: true,
						position: "right",
						align: "center",
						labels: {
							boxWidth: 20,
							boxHeight: 20,
							padding: 10,
							fontColor: "#fff",
							usePointStyle: {
								display: true,
							},
						},
					},
				}}
			/>
		</article>
	);
};

export default Donut;
