import IconInfected from "../public/images/stats/confirmed.svg";
import IconRecovered from "../public/images/stats/rcovered.svg";
import IconTested from "../public/images/stats/tested.svg";
import IconDeaths from "../public/images/stats/deaths.svg";
import formatNumber from "../helpers";

const Cards = ({
	data: {
		country,
		updated,
		cases,
		todayCases,
		recovered,
		deaths,
		todayDeaths,
		tests,
	},
}) => {
	return (
		<div>
			<p className="stats_text">
				At today: {new Date(updated).toLocaleString()} <br />
				The current sitiuation in your Country is:
			</p>
			<div className="section">
				<article className="card_flex">
					<IconTested />
					<h2 className="info info_deaths blue">Tested</h2>
					<p className="info info_deaths blue">{formatNumber(tests)}</p>
				</article>
				<article className="card_flex">
					<IconInfected />
					<h2 className="info info_confirmed">Infected</h2>
					<p className="info info_confirmed">{formatNumber(cases)}</p>
					{/* <span className="info info_confirmed text_small">+{todayCases}</span> */}
				</article>
				<article className="card_flex">
					<IconRecovered />
					<h2 className="info info_recovered">Recovered</h2>
					<p className="info info_recovered">{formatNumber(recovered)}</p>
					{/* <p className="info info_recovered text_small"> {""}</p> */}
				</article>
				<article className="card_flex">
					<IconDeaths />
					<h2 className="info info_deaths">Deaths</h2>
					<p className="info info_deaths">{formatNumber(deaths)}</p>
					{/* <span className="info info_deaths text_small">+{todayDeaths}</span> */}
				</article>
			</div>
		</div>
	);
};

export default Cards;
