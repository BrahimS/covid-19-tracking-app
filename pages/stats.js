import Wrapper from "../components/Wrapper";
import fetch from "node-fetch";

const StatsPage = ({ data }) => (
	<Wrapper title="Stats Page">
		<section className="stats_container">
			<select id="countrySelection" className="" placeholder="Choose a Country">
				<option value="">Country1</option>
				<option value="">Country2</option>
				<option value="">Country3</option>
			</select>
			{console.log(data)}
			<ul>
				The current sitiuation as of today:{" "}
				{`${new Date(data.updated).toLocaleDateString()} is:`}
				<li>Affected Country: {data.affectedCountries}</li>
				<li>Cases: {data.cases}</li>
				<li>Today Cases: {data.todayCases}</li>
				<li>death: {data.deaths}</li>
				<li>Today Death: {data.todayDeaths}</li>
				<li>Recovered: {data.recovered}</li>
				<li>Tested: {data.tests}</li>
			</ul>
		</section>
	</Wrapper>
);

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	const API = "https://corona.lmao.ninja/v2/all";
	const res = await fetch(API);
	const data = await res.json();

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			data,
		},
	};
}
export default StatsPage;
