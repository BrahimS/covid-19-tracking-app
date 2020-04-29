import React, { Fragment } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wrapper = ({ children, title }) => (
	<>
		<Head>
			<title>{title}</title>
		</Head>
		<Navbar />
		<section>{children}</section>
		<Footer />
	</>
);
export default Wrapper;
