import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import "../public/styles/index.sass";

function BsApp({ Component, pageProps }) {
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
