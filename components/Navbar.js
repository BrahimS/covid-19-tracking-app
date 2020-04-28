import React from "react";
import Logo from "./Logo";
import Link from "next/link";
const Navbar = () => (
	<header>
		<div className="logo">
			<img src={Logo} />
		</div>
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
	</header>
);

export default Navbar;
