"use client";

import { HeaderHome } from "./_components/header";
import { Background } from "./_components/background";
import { Projects } from "./_components/projects";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
import { About } from "./_components/about";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <Background />
      <div className="absolute w-screen top-12 min-h-[calc(100vh-48px)]">
        <About />
        <Projects />
        <section>
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}
