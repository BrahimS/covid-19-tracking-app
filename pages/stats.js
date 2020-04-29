import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import { Picker, Cards, Donut } from "../components";
import { getStats } from "../data/";

// const StatsPage = ({ data, country = "Morocco" } = this.props) => (
// 	<Wrapper title="Stats Page">
// 		<section className="stats_container">
// 			<Picker />
// 			<select id="countrySelection" className="" placeholder="Choose a Country">
// 				<option value="">Choose a Country</option>
// 				<option value="">Country2</option>
// 				<option value="">Country3</option>
// 			</select>
// 			{console.log(data)}

// 			<div className="">
// 				<p className="stats_text">
// 					At today: {new Date(data.updated).toLocaleDateString()} <br />
// 					The current sitiuation in {country} is:
// 				</p>
// 				<div className="section">
// 					<Card />
// 					<article className="card_flex">
// 						<h2 className="info info_recovered">Recovered</h2>
// 						<p className="info info_recovered">{data.recovered}</p>
// 					</article>
// 					<article className="card_flex">
// 						<h2 className="info info_deaths">Deaths</h2>
// 						<p className="info info_deaths">{data.deaths}</p>
// 						<span className=""> +{data.todayDeaths}</span>
// 					</article>
// 					<article className="card_flex">
// 						<p className="info info_tests">Tests</p>
// 						<span>{data.tests}</span>
// 					</article>
// 				</div>
// 			</div>
// 			<Donut />
// 		</section>
// 	</Wrapper>
//);

// export async function getStaticProps() {
// 	// Call an external API endpoint to get posts.
// 	const API = "https://corona.lmao.ninja/v2/all";
// 	const res = await fetch(API);
// 	const data = await res.json();

// 	// By returning { props: posts }, the Blog component
// 	// will receive `posts` as a prop at build time
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }

class StatsPage extends Component {
	state = {
		data: {},
	};
	async componentDidMount() {
		const allData = await getStats();
		this.setState({ data: allData });
		console.log({ allData });
	}
	render() {
		const { data } = this.state;
		return (
			<Wrapper>
				<section className="stats_container">
					<Picker />
					<Cards data={data} />
					<Donut />
				</section>
			</Wrapper>
		);
	}
}
export default StatsPage;
