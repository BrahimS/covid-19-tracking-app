import axios from "axios";
const API = "https://disease.sh/v3/covid-19";

interface ChartData {
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

export const getStats = async (country: string) => {
	let changeEndPoint: string | undefined = `${API}/all`;
	if (country) {
		changeEndPoint = `${API}/countries/${country}`;
	}

	try {
		const {
			data: {
				updated,
				cases,
				todayCases,
				recovered,
				deaths,
				todayDeaths,
				tests,
			},
		}: ChartData = await axios.get(changeEndPoint);
		const neededData = {
			cases,
			todayCases,
			recovered,
			deaths,
			todayDeaths,
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
		const result = data.find(({ country }) => country === "Western Sahara");
		result.country = "";
		return data.map((country) => country.country);
	} catch (error) {
		console.log(error);
	}
};
