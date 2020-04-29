const Cards = ({
	data: { updated, cases, todayCases, recovered, deaths, todayDeaths, tests },
}) => {
	console.log(recovered);
	return (
		<div>
			<p className="stats_text">
				At today: {new Date(updated).toLocaleDateString()} <br />
				The current sitiuation in country is:
			</p>
			<div className="section">
				<article className="card_flex">
					<h2 className="info info_confirmed">Infected</h2>
					<p className="info info_confirmed">{cases}</p>
					<span className="info info_confirmed">+{todayCases}</span>
				</article>
				<article className="card_flex">
					<h2 className="info info_recovered">Recovered</h2>
					<p className="info info_recovered">{recovered}</p>
					<p className="info info_recovered">{""}</p>
				</article>
				<article className="card_flex">
					<h2 className="info info_deaths">Deaths</h2>
					<p className="info info_deaths">{deaths}</p>
					<span className="info info_deaths">+{todayDeaths}</span>
				</article>
			</div>
		</div>
	);
};

export default Cards;
