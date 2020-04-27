import Wrapper from "../components/Wrapper";
import fetch from "isomorphic-unfetch";
const Homepage = ({ data }) => (
	<Wrapper title="Home Page">
		<section className="section_padding">
			{console.log({ data })}
			<h1>
				<span className="heading_span">
					{data.sectionOne.span}
					<br />
				</span>
				{data.sectionOne.title}
			</h1>
			<div className="section">
				<p className="section_content__para">{data.sectionOne.text}</p>
				<img className="section_content__hero" src={data.sectionOne.img} />
			</div>
		</section>
	</Wrapper>
);

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	const API = `https://raw.githubusercontent.com/BrahimS/covid-19-tracking-app/master/pageContent/content.json`;
	const res = await fetch(API);
	const data = await res.json();

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			data,
		},
	};
}
export default Homepage;
