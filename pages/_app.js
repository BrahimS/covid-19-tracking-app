import { AppProps } from "next/app";
import "../public/styles/index.sass";

function BsApp({ Component, pageProps }) {
	return (
		<div className="wrapper">
			<Component {...pageProps} />
		</div>
	);
}

export default BsApp;
