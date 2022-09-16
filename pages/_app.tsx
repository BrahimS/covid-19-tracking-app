import { useEffect, FC } from "react";
import GoogleAnalytics from "react-ga";
import Navbar from "../components/Navbar";
import "../public/styles/index.sass";

const BsApp: FC = ({ Component, pageProps }: any) => {
	useEffect(() => {
		GoogleAnalytics.initialize(process.env.ga);
		GoogleAnalytics.pageview(window.location.pathname);
	}, []);
	return (
		<>
			<Navbar />
			<div className="wrapper">
				<Component {...pageProps} />
			</div>
		</>
	);
};

export default BsApp;
