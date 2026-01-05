import { IoChatbubbleOutline } from "react-icons/io5";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <span className="flex justify-left items-center"><IoChatbubbleOutline className="w-20 h-20 pr-1" />
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1></span>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-4">
        No one asked for my ideas - but here they are!
      </h4>
    </section>
  );
}
