import { motion } from "framer-motion";
import formatNumber from "../helpers/index";
import IconInfected from "../public/images/stats/confirmed.svg";
import IconRecovered from "../public/images/stats/rcovered.svg";
import IconTested from "../public/images/stats/tested.svg";
import IconDeaths from "../public/images/stats/deaths.svg";

interface DataCard {
	country: string;
	data: {
		updated: number;
		cases: number;
		todayCases: number;
		recovered: number;
		deaths: number;
		todayDeaths: number;
		tests: number;
	};
}

const Cards = ({
	country,
	data: { updated, cases, todayCases, recovered, deaths, todayDeaths, tests },
}: DataCard): JSX.Element => {
	return (
		<div>
			<p className="stats_text">
				At today: {new Date(updated).toLocaleString()} <br />
				The current situation in <span className="orange bold">
					{country}
				</span>{" "}
				is:
			</p>
			<div className="section section_stats">
				<motion.article
					className="card_flex"
					initial={{ scale: 0 }}
					animate={{ scale: 0.8 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 100,
						duration: 0.5,
					}}
				>
					<IconTested />
					<div>
						<h2 className="info info_deaths blue">Tested</h2>
						<p className="info info_deaths blue bold">{formatNumber(tests)}</p>
					</div>
				</motion.article>
				<motion.article
					className="card_flex"
					initial={{ scale: 0 }}
					animate={{ scale: 0.8 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 100,
						duration: 1,
					}}
				>
					<div className=" small bold bgPlus yellow">
						+{formatNumber(todayCases)}
					</div>
					<IconInfected />
					<div>
						<h2 className="info info_confirmed">Infected</h2>
						<p className="info info_confirmed bold">{formatNumber(cases)}</p>
					</div>
				</motion.article>
				<motion.article
					className="card_flex"
					initial={{ scale: 0 }}
					animate={{ scale: 0.8 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 100,
						duration: 1.5,
					}}
				>
					<IconRecovered />
					<div>
						<h2 className="info info_recovered">Recovered</h2>
						<p className="info info_recovered bold">
							{formatNumber(recovered)}
						</p>
					</div>
				</motion.article>
				<motion.article
					className="card_flex"
					initial={{ scale: 0 }}
					animate={{ scale: 0.8 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 100,
						duration: 2,
					}}
				>
					<div className=" red small bold bgPlus">
						+{formatNumber(todayDeaths)}
					</div>
					<IconDeaths />
					<div>
						<h2 className="info info_deaths">Deaths</h2>
						<p className="info info_deaths bold">{formatNumber(deaths)}</p>
					</div>
				</motion.article>
			</div>
		</div>
	);
};

export default Cards;
