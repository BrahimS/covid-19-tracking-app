import axios from "axios";
const API = "https://corona.lmao.ninja/v2";

export const getStats = async (country) => {
	let changeEndPoint = `${API}/all`;
	if (country) {
		changeEndPoint = `${API}/countries/${country}`;
	}

	try {
		const {
			data: { updated, cases, recovered, deaths, tests },
		} = await axios.get(changeEndPoint);
		const neededData = {
			cases,
			recovered,
			deaths,
			tests,
			updated,
		};
		return neededData;
	} catch (error) {
		console.log(error);
	}
};

export const fetchCountries = async () => {
	try {
		const { data } = await axios.get(`${API}/countries`);
		return data.map((country) => country.country);
	} catch (error) {
		console.log(error);
	}
};
