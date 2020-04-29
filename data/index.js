import axios from "axios";
const API = "https://corona.lmao.ninja/v2";

export const getStats = async () => {
	try {
		const {
			data: { updated, cases, recovered, deaths, tests },
		} = await axios.get(`${API}/all`);
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

export const curentDataFetch = async () => {
	try {
		const { data } = await axios.get(`${API}/countries`);
		const currentNeededData = data.map((theData) => ({
			cases: theData.cases,
			recovered: theData.recovered,
			deaths: theData.deaths,
			tests: theData.tests,
			updated: theData.updated,
		}));
		console.log(currentNeededData);
		return currentNeededData;
	} catch (error) {
		console.log(error);
	}
};
