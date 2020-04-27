import Link from "next/link";
const Navbar = () => (
	<ul className="header_padding">
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
);

export default Navbar;
