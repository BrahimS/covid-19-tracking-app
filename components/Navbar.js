import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../svgs/coronaLogo.svg";
const Navbar = () => {
	return (
		<header className="header">
			<nav className="main_navigation">
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1.5 }}
					transition={{
						type: "spring",
						stiffness: 1000,
						damping: 10,
						duration: 1.5,
					}}
				>
					<Logo />
				</motion.div>
				<ul className="">
					<li>
						<Link href="/about">
							<a>Covid-19</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a id="stats">Stats</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
