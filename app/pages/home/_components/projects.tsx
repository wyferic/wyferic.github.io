import { IoChatbubbleOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="drop-shadow-md scroll-mt-24 w-[90vw] md:w-[md] max-w-[60ch] bg-white dark:bg-gray-900 dark:text-white rounded-md"
    >
      <h2>Stuff</h2>
      <ul className="ml-2">
        <li className="">
          <a href="/pages/blog">
            <span className="underline flex hover:bg-gray-200 hover:dark:bg-gray-800 p-2 rounded-sm transition-colors duration-200">
              <IoChatbubbleOutline className="w-6 h-6 pr-1" /> Blog
            </span>
          </a>{" "}
          <span className="flex">
            <div className="ml-8"></div> Everyone has one but do people even read these?
          </span>
        </li>

		<li className="">
          <a href="https://github.com/wyferic" target="_blank">
            <span className="underline flex hover:bg-gray-200 hover:dark:bg-gray-800 p-2 rounded-sm transition-colors duration-200">
              <IoLogoGithub className="w-6 h-6 pr-1" /> Projects
            </span>
          </a>{" "}
          <span className="flex">
            <div className="ml-8"></div> Contains my coding projects, held together by hopes and dreams
          </span>
        </li>

		<li className="">
          <a href="assets/VeryCoolResume.pdf" download>
            <span className="underline flex hover:bg-gray-200 hover:dark:bg-gray-800 p-2 rounded-sm transition-colors duration-200">
              <IoPerson className="w-6 h-6 pr-1" /> Resume
            </span>
          </a>{" "}
          <span className="flex">
            <div className="ml-8"></div> Hire me already
          </span>
        </li>
      </ul>
    </section>
  );
};
