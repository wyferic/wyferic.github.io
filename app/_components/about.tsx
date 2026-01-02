import Image from "next/image";

export const About = () => {
	const date: number = Math.floor((new Date().getTime() - new Date(`${process.env.BIRTHDAY}T00:00:00Z`).getTime()) / 31557600000);
	return (
		<section id="about" className="rounded-md scroll-mt-24 w-[90vw] md:w-[md] max-w-[60ch] bg-white dark:bg-gray-900 dark:text-white">
			<h2>About</h2>
			<Image loading="eager" src="/peak.png" alt="peak" width={430} height={315} className="rounded-lg my-4 mx-auto block" />
			<p>
				{date}M, <del>ChatGPT enjoyer</del> <q>programmer.</q> 
			</p>
		</section>
	);
};
