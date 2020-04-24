import Link from 'next/link'
const Navbar = () => (
	<ul>
		<li>
			<Link href="/">
				<a>Covid-19</a>
			</Link>
		</li>
		<li>
			<Link href="/stats">
				<a>Stats</a>
			</Link>
		</li>
	</ul>
)

export default Navbar
