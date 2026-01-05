import { HeaderButton } from "./header-button";
// import { HeaderSearch } from "./header-search"; 
import { ThemeToggle } from "./theme-toggle";

export const HeaderBlog = () => {
  return (
    <header className="transition-colors duration-200 fixed flex items-center h-12 w-screen justify-between px-4 py-2 bg-white dark:bg-black color-change z-1000">
      <span className="hidden sm:flex-1 sm:flex sm:ml-4 sm:text-black sm:dark:text-white sm:text-xl sm:font-bold">
        WYF
      </span>

      {/* <HeaderSearch /> */}

      <div className="flex-1 flex justify-center md:justify-end md:mr-8">
        <div className="flex align-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export const HeaderHome = () => {
  return (
    <header className="transition-colors duration-200 fixed flex items-center h-12 w-screen justify-between px-4 py-2 bg-white dark:bg-black color-change z-1000">
      <span className="hidden sm:flex-1 sm:flex sm:ml-4 sm:text-black sm:dark:text-white sm:text-xl sm:font-bold">
        WYF
      </span>

      <div className="flex-1 flex justify-center md:justify-end md:mr-8">
        <nav className="flex space-x-8 mr-8">
          <HeaderButton href="#about">About</HeaderButton>
          <HeaderButton href="#projects">Projects</HeaderButton>
          <HeaderButton href="#contact">Contact</HeaderButton>
        </nav>

        <div className="flex align-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
