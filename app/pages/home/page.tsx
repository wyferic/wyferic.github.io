"use client"

import { HeaderHome } from "@/app/_components/header";
import { Background } from "@/app/pages/home/_components/background";
import { Projects } from "@/app/pages/home/_components/projects";
import { Contact } from "@/app/pages/home/_components/contact";
import { Footer } from "@/app/pages/home/_components/footer";
import { About } from "@/app/pages/home/_components/about";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <Background />
      <div className="absolute w-screen top-12 min-h-[calc(100vh-48px)]">
        <About />
        <Projects />
        <section className="drop-shadow-md">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}
