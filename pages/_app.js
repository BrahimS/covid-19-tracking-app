import { AppProps } from "next/app";
import "../public/styles/index.sass";

function MyApp({ Component, pageProps }) {
	return (
		<div className="container">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
