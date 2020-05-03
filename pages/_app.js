import React, { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import GoogleAnalytics from "react-ga";
import "../public/styles/index.sass";

function BsApp({ Component, pageProps }) {
	useEffect(() => {
		GoogleAnalytics.initialize("UA-165401975-1");
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
