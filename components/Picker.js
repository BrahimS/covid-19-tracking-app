import React, { useState, useEffect } from "react";
import { fetchCountries } from "../data";
const Picker = ({ handleChange }) => {
	const [getCountries, setGetCountries] = useState([]);
	useEffect(() => {
		const pickCountry = async () => {
			setGetCountries(await fetchCountries());
		};
		pickCountry();
	}, [setGetCountries]);

	return (
		<section className="stats_container">
			<form className="picker_flex">
				<select
					value=""
					onChange={(event) => handleChange(event.target.value)}
					className="section"
					id="countrySelection"
					placeholder="Choose a Country"
				>
					<option value="">Choose a Country</option>
					{getCountries.map((country, index) => (
						<option value={country} key={index}>
							{country}
						</option>
					))}
				</select>
			</form>
		</section>
	);
};

export default Picker;
