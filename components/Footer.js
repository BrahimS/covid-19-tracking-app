import Link from "next/link";
const Footer = () => (
	<footer className="footer_info">
		<div>
			©{new Date().getFullYear()}
			<Link href="https://brahimsourny.pro">
				<a className="">
					{" "}
					Made with 💜 by <span className="purple">Brahim Sourny</span>
				</a>
			</Link>
		</div>
		<div>
			About this
			<Link href="/info">
				<a className="purple"> web Application </a>
			</Link>
		</div>
	</footer>
);
export default Footer;
