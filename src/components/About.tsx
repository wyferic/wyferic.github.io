export const About = () => {
	const date = Math.floor(
		// @ts-expect-error
		(new Date() - new Date("2001-05-01T00:00:00Z")) / 31536000000,
	);

	return (
		<section id="about">
			<h2>About</h2>
			<p>
				{date}
				M,
				<del>chatgpt prompt spammer</del> "programmer", single, and ready to
				mingle
			</p>
		</section>
	);
};
