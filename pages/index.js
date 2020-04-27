import Wrapper from "../components/Wrapper";
import fetch from "node-fetch";
const Homepage = () => (
	<Wrapper title="Home Page">
		<section className="section_padding">
			<h1>
				<span className="heading_span">
					{content.sectionOne.span} <br />
				</span>
				Covid-19?
			</h1>
		</section>
	</Wrapper>
);

Homepage.getInitialProps = async (ctx) => {
	const res = await fetch("../pageContent/content.json");
	const json = await res.json();
	return { content: json.stargazers_count };
};

export default Homepage;
