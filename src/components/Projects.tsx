export const Projects = () => {
	return (
		<section id="projects" className="scroll-mt-[96px] w-[90vw] md:w-[md] max-w-[60ch] bg-white dark:bg-gray-900 dark:text-white">
			<h2>Stuff</h2>
			<ul className="list-disc ml-6">
				<li>
					<a href="">
						<span className="underline">Blog (Coming Soon)</span>
					</a> <br/>
					Everyone has one but do people even read these?</li>
				<li>
					<a href="https://github.com/wyferic" target="_blank">
						<span className="underline">Projects</span>
					</a> <br/> 
					Contains my coding projects, held together by hopes and dreams</li>
				<li>
					<a href="assets/VeryCoolResume.pdf" download>
						<span className="underline">Resume</span>
					</a> <br/> 
					Hire me already</li>
			</ul>
		</section>
	);
};
