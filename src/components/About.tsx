export const About = () => {
	const date: number = Math.floor((new Date().getTime() - new Date("2001-05-01T00:00:00Z").getTime()) / 31557600000);
	return (
		<section id="about" className="scroll-mt-[96px] w-[90vw] md:w-[md] max-w-[60ch] bg-white dark:bg-gray-900 dark:text-white">
			<h2>About</h2>
			<img src="/public/peak.png" className="my-4 mx-auto block rounded 2xl"></img>
			<p>
				{date}M, <del>ChatGPT enjoyer</del> "programmer."
			</p>
		</section>
	);
};
