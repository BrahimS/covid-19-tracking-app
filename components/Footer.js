import Link from "next/link";
const Footer = () => (
	<footer>
		{new Date().getFullYear()}
		<Link href="https://brahimsourny.pro">
			<a className="">© Brahim Sourny</a>
		</Link>
	</footer>
);
export default Footer;
