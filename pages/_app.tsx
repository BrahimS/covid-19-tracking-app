import { useEffect, FC } from "react";
import Navbar from "../components/Navbar.tsx";
import GoogleAnalytics from "react-ga";
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
