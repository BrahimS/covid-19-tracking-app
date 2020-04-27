import Wrapper from "../components/Wrapper";
import fetch from "isomorphic-unfetch";
const Homepage = ({ data }) => (
	<Wrapper title="Home Page">
		{/* Section One */}
		<section className="section_content">
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
		{/* Section Two */}
		<section className="section_content">
			<h1>
				<span className="heading_span">
					{data.sectionTwo.span}
					<br />
				</span>
				{data.sectionTwo.title}
			</h1>
			<div className="">
				<p className="para_width__50">{data.sectionTwo.text}</p>
				<div className="section section_cards">
					<article className="card">
						<img src={data.sectionTwo.card1.icon} />
						<p className="headingTwo">{data.sectionTwo.card1.title}</p>
						<p>{data.sectionTwo.card1.text}</p>
					</article>
					<article className="card">
						<img src={data.sectionTwo.card2.icon} />
						<p className="headingTwo">{data.sectionTwo.card2.title}</p>
						<p>{data.sectionTwo.card2.text}</p>
					</article>
					<article className="card">
						<img src={data.sectionTwo.card3.icon} />
						<p className="headingTwo">{data.sectionTwo.card3.title}</p>
						<p>{data.sectionTwo.card3.text}</p>
					</article>
				</div>
			</div>
		</section>
		{/* Section Three */}
		<section className="section_content">
			<h1>
				<span className="heading_span">
					{data.sectionThree.span}
					<br />
				</span>
				{data.sectionThree.title}
			</h1>
			<div className="">
				<p className="para_width__50">{data.sectionThree.text}</p>
				<div className="section section_cards">
					<article className="card">
						<img src={data.sectionThree.card1.icon} />
						<p className="headingTwo">{data.sectionThree.card1.title}</p>
						<p>{data.sectionThree.card1.text}</p>
					</article>
					<article className="card">
						<img src={data.sectionThree.card2.icon} />
						<p className="headingTwo">{data.sectionThree.card2.title}</p>
						<p>{data.sectionThree.card2.text}</p>
					</article>
					<article className="card">
						<img src={data.sectionThree.card3.icon} />
						<p className="headingTwo">{data.sectionThree.card3.title}</p>
						<p>{data.sectionThree.card3.text}</p>
					</article>
				</div>
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
