import IconInfected from "../public/images/stats/confirmed.svg";
import IconRecovered from "../public/images/stats/rcovered.svg";
import IconTested from "../public/images/stats/tested.svg";
import IconDeaths from "../public/images/stats/deaths.svg";
import formatNumber from "../helpers";

const Cards = ({
	country,
	data: { updated, cases, todayCases, recovered, deaths, todayDeaths, tests },
}) => {
	return (
		<div>
			<p className="stats_text">
				At today: {new Date(updated).toLocaleString()} <br />
				The current situation in <span className="orange bold">
					{country}
				</span>{" "}
				is:
			</p>
			<div className="section">
				<article className="card_flex">
					<IconTested />
					<div>
						<h2 className="info info_deaths blue">Tested</h2>
						<p className="info info_deaths blue bold">{formatNumber(tests)}</p>
					</div>
				</article>
				<article className="card_flex">
					<div className=" small bold bgPlus yellow">
						+{formatNumber(todayCases)}
					</div>
					<IconInfected />
					<div>
						<h2 className="info info_confirmed">Infected</h2>
						<p className="info info_confirmed bold">{formatNumber(cases)}</p>
					</div>
				</article>
				<article className="card_flex">
					<IconRecovered />
					<div>
						<h2 className="info info_recovered">Recovered</h2>
						<p className="info info_recovered bold">
							{formatNumber(recovered)}
						</p>
					</div>
				</article>
				<article className="card_flex">
					<div className=" red small bold bgPlus">
						+{formatNumber(todayDeaths)}
					</div>
					<IconDeaths />
					<div>
						<h2 className="info info_deaths">Deaths</h2>
						<p className="info info_deaths bold">{formatNumber(deaths)}</p>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Cards;
