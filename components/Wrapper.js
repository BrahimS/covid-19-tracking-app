import Head from 'next/head'
import Navbar from './Navbar'

const Wrapper = ({ children, title }) => (
	<section>
		<Head>
			<title>{title}</title>
		</Head>
		<Navbar />
		{children}
	</section>
)
export default Wrapper
