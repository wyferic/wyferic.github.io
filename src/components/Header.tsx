import { DarkLightToggle } from "./DarkLightToggle";

export const Header = () => {
	return (
		<header className="fixed flex items-center h-12 w-screen justify-between px-4 py-2 bg-white dark:bg-black color-change z-[1000]">
			<span className="hidden sm:flex-1 sm:flex sm:ml-4 sm:text-black sm:dark:text-white sm:text-xl sm:font-bold">WYF</span>

			{/* <div className="flex-1 flex justify-center">
				<input
				type="text"
				placeholder="Search ..."
				className="w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
				/>
			</div> */}
			
			<div className="flex-1 flex justify-center md:justify-end md:mr-8">
				<nav className="flex space-x-8 mr-8">
					<a href="#about" className="text-black dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-[10%] after:w-[80%] after:h-[2px] after:rounded after:bg-black after:transform after:scale-x-0 after:origin-center after:transition-transform after:duration-100 hover:after:scale-x-100 dark:after:bg-white pb-1">About</a>
					<a href="#projects" className="text-black dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-[10%] after:w-[80%] after:h-[2px] after:rounded after:bg-black after:transform after:scale-x-0 after:origin-center after:transition-transform after:duration-100 hover:after:scale-x-100 dark:after:bg-white pb-1">Stuff</a>
					<a href="#contact" className="text-black dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-[10%] after:w-[80%] after:h-[2px] after:rounded after:bg-black after:transform after:scale-x-0 after:origin-center after:transition-transform after:duration-100 hover:after:scale-x-100 dark:after:bg-white pb-1">Contact</a>
				</nav>

				<div className="flex align-center">
					<DarkLightToggle />
				</div>
			</div>
		</header>
	);
};
