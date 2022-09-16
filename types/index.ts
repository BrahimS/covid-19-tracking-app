export interface ChartData {
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

export interface Content {
	span?: string;
	title?: string;
	text?: string;
	img?: string;
}

export interface DataCard {
	country: string;
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
