import axios from "axios";
import { ChartData } from "../types/index";

const API = process.env.NEXT_PUBLIC_API_HOST;

type Country = {
	country: string;
};

export const getStats = async (country: Country) => {
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
		const result = data.find(
			({ country }: Country) => country === "Western Sahara"
		);
		result.country = "";
		return data.map((country: Country) => country.country);
	} catch (error) {
		console.log(error);
	}
};
