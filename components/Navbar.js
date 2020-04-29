import React from "react";
import Logo from "../svgs/coronaLogo.svg";
import Link from "next/link";
const Navbar = () => (
	<header>
		<div className="logo">
			<Logo />
		</div>
		<nav className="header_padding">
			<ul className="main_navigation">
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
		</nav>
	</header>
);

export default Navbar;
