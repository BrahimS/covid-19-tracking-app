import React, { Fragment } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Footer from "./Footer";

const Wrapper = ({ children, title }) => (
	<>
		<Head>
			<title>{title}</title>
		</Head>
		<motion.section
			className="mt_200"
			initial={{ opacity: 0, y: "10%" }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2 }}
		>
			{children}
		</motion.section>
		<Footer />
	</>
);
export default Wrapper;
