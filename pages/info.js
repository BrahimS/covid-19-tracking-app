import Link from "next/link";
import Wrapper from "../components/Wrapper.tsx";
const info = () => {
	return (
		<Wrapper title="Informations about this application">
			<section clasName="section_content">
				<h1>COVID-19 tracker web application</h1>
				<article>
					<h2 className="hedding_h2">Description:</h2>
					<p>
						This application provides data concerning the progress of COVID-19
						in the world. It also gives us information about this virus, how it
						spreads, how to protect against it.
					</p>
				</article>
				<article>
					<h2 className="hedding_h2">Motivation:</h2>
					<p>
						Like everyone today, my daily life is turned upside down by
						COVID-19. I learned a lot about this virus and especially how to
						protect myself and my family from it. I also wanted to know the
						progression of this pandemic throughout the world. <br />
						Every day, I went to three different health ministry websites, of
						three different countries: France, where I currently live,
						Switzerland where I work punctually and Morocco where I am from, and
						return there from time to time. After three weeks of repeating this
						process, I've decided to create this application, which allows me
						and everyone who wish to have a single source of information about
						COVID-19 and how it progresses in worldwide.
					</p>
				</article>
				<article className="mb_200">
					<h2 className="hedding_h2">Sources:</h2>
					<p>
						- Home page content is comming from the{" "}
						<Link href="https://www.who.int/">
							<a className="purple bold"> WHO </a>
						</Link>
						<br />- Stats page, the real time data is provided by this open
						source
						<Link href="https://corona.lmao.ninja/">
							<a className="purple bold"> API</a>
						</Link>
					</p>
				</article>
			</section>
		</Wrapper>
	);
};
export default info;
