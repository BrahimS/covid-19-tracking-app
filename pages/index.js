import Wrapper from "../components/Wrapper";
import fetch from "isomorphic-unfetch";
const Homepage = ({ data }) => (
	<Wrapper title="Home Page">
		{/* Section One */}
		<section className="section_content">
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
		<section className=" section section_content">
			<div className="">
				<h1>
					<span className="heading_span">
						{data.sectionThree.span}
						<br />
					</span>
					{data.sectionThree.title}
				</h1>
				<div className="section">
					<p className="para_width__70">{data.sectionThree.text}</p>
					<div className="mt_negative__30 section_cards">
						<article className="card_symptoms">
							<img src={data.sectionThree.card1.icon} />
							<p className="headingTwo headingTwo_symptoms">
								{data.sectionThree.card1.title}
							</p>
							<p>{data.sectionThree.card1.text}</p>
						</article>
						<article className="card_symptoms">
							<img src={data.sectionThree.card2.icon} />
							<p className="headingTwo headingTwo_symptoms">
								{data.sectionThree.card2.title}
							</p>
							<p>{data.sectionThree.card2.text}</p>
						</article>
						<article className="card_symptoms">
							<img src={data.sectionThree.card3.icon} />
							<p className="headingTwo headingTwo_symptoms">
								{data.sectionThree.card3.title}
							</p>
							<p>{data.sectionThree.card3.text}</p>
						</article>
					</div>
					<div className="mt_negative__30 section_cards">
						<article className="card_symptoms">
							<img src={data.sectionThree.card4.icon} />
							<p className="headingTwo headingTwo_symptoms">
								{data.sectionThree.card4.title}
							</p>
							<p>{data.sectionThree.card4.text}</p>
						</article>
						<article className="card_symptoms">
							<img src={data.sectionThree.card5.icon} />
							<p className="headingTwo headingTwo_symptoms">
								{data.sectionThree.card5.title}
							</p>
							<p>{data.sectionThree.card5.text}</p>
						</article>
						<article className="card_symptoms">
							<img src={data.sectionThree.card6.icon} />
							<p className="headingTwo headingTwo_symptoms">
								{data.sectionThree.card6.title}
							</p>
							<p>{data.sectionThree.card6.text}</p>
						</article>
					</div>
				</div>
			</div>
		</section>
		{/* Section Four */}
		<section className="section_content">
			<h1>
				<span className="heading_span">
					{data.sectionFour.span}
					<br />
				</span>
				{data.sectionFour.title}
			</h1>
			<div className="">
				<p className="para_width__50">{data.sectionFour.text}</p>
				<div className="section section_cards">
					<article className="card">
						<img className="padding_30" src={data.sectionFour.card1.icon} />

						<p>{data.sectionFour.card1.text}</p>
					</article>
					<article className="card">
						<img className="padding_30" src={data.sectionFour.card2.icon} />

						<p>{data.sectionFour.card2.text}</p>
					</article>
					<article className="card">
						<img className="padding_30" src={data.sectionFour.card3.icon} />

						<p>{data.sectionFour.card3.text}</p>
					</article>
				</div>
				<div className="section section_cards">
					<article className="card">
						<img className="padding_30" src={data.sectionFour.card4.icon} />

						<p>{data.sectionFour.card4.text}</p>
					</article>
					<article className="card">
						<img className="padding_30" src={data.sectionFour.card5.icon} />

						<p>{data.sectionFour.card5.text}</p>
					</article>
					<article className="card">
						<img className="padding_30" src={data.sectionFour.card6.icon} />

						<p>{data.sectionFour.card6.text}</p>
					</article>
				</div>
			</div>
			<div className="section section_cards">
				<article className="card">
					<img className="padding_30" src={data.sectionFour.card7.icon} />

					<p>{data.sectionFour.card7.text}</p>
				</article>
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
