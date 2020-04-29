import React, { useState, UseEffect } from "react";
const Picker = () => {
	return (
		<section className="stats_container">
			<article className="picker_flex">
				<form>
					<select
						id="countrySelection"
						className=""
						placeholder="Choose a Country"
					>
						<option value="">Choose a Country</option>
						<option value="">Country2</option>
						<option value="">Country3</option>
					</select>
				</form>
			</article>
		</section>
	);
};

export default Picker;
