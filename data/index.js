import axios from "axios";
const API = "https://corona.lmao.ninja/v2/all";

export const getStats = async () => {
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
		} = await axios.get(API);
		const neededData = {
			cases,
			todayCases,
			recovered,
			deaths,
			tests,
			updated,
			todayDeaths,
		};
		return neededData;
	} catch (error) {
		console.log(error);
	}
};
