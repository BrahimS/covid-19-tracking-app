import { Doughnut } from "react-chartjs-2";

const Donut = ({ data: { updated, cases, recovered, deaths, tests } }) => {
	// const [todayData, setTodayData] = useState([]);
	// useEffect(() => {
	// 	const dataFetch = async () => {
	// 		setTodayData(await curentDataFetch());
	// 	};
	// 	console.log(todayData);
	// 	dataFetch();
	// }, []);

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
