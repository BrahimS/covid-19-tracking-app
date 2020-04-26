import Head from "next/head";
import Navbar from "./Navbar";

const Wrapper = ({ children, title }) => (
	<section>
		<Head>
			<title>{title}</title>
		</Head>
		<Navbar />
		<section className="container">{children}</section>
	</section>
);
export default Wrapper;
