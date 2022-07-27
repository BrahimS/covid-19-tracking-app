import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import GoogleAnalytics from "react-ga";
import "../public/styles/index.sass";

function BsApp({ Component, pageProps }) {
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
}

export default BsApp;
