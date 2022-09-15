import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "./Footer.tsx";

interface Content {
	title: string;
	children: string;
}

const Wrapper: React.FC = ({ title, children }: Content): JSX.Element => (
	<>
		<Head>
			<title>{title}</title>
		</Head>
		<motion.section
			className="mt_150"
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
