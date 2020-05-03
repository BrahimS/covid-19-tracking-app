import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import { Picker, Cards, Donut } from "../components";
import { getStats } from "../data";

class StatsPage extends Component {
	state = {
		data: {},
		country: "",
	};
	async componentDidMount() {
		const allData = await getStats();
		this.setState({ data: allData });
	}
	s;
	handleChange = async (country) => {
		const comingData = await getStats(country);
		this.setState({ data: comingData, country: country });
	};
	render() {
		const { data, country } = this.state;
		return (
			<Wrapper title="Stats Page">
				<section className="stats_container">
					<Picker handleChange={this.handleChange} data={data} />
					<Cards
						data={data}
						handleChange={this.handleChange}
						country={country}
					/>
					<Donut data={data} />
				</section>
			</Wrapper>
		);
	}
}
export default StatsPage;
