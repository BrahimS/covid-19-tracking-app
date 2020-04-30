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
					labels: ["Tested", "Infected", "Recovered", "Deaths"],
					datasets: [
						{
							data: [tests, cases, recovered, deaths],
							backgroundColor: ["#36A2EB", "#F3C052", "#81C5A3", "#ff0000"],
							hoverBackgroundColor: [
								"#36A2EB",
								"#F3C052",
								"#81C5A3",
								"#ff0000",
							],
							borderColor: "#000050",
						},
					],
				}}
				width={600}
				height={400}
			/>
		</article>
	);
};

export default Donut;
