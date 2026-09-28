import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "./data/site";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import BeforeAfter from "./components/BeforeAfter";
import Materials from "./components/Materials";
import Services from "./components/Services";
import Studio from "./components/Studio";
import Process from "./components/Process";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

type View = { name: "home" } | { name: "project"; id: string };

export default function App() {
  const [view, setView] = useState<View>({ name: "home" });

  /* reset scroll whenever the view changes */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [view]);

  const scrollTo = useCallback((id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onNav = useCallback(
    (id: string) => {
      if (view.name === "project") {
        setView({ name: "home" });
        window.setTimeout(() => scrollTo(id), 80);
      } else {
        scrollTo(id);
      }
    },
    [view, scrollTo]
  );

  const openProject = useCallback((id: string) => setView({ name: "project", id }), []);
  const goHome = useCallback(() => setView({ name: "home" }), []);

  const project =
    view.name === "project" ? PROJECTS.find((p) => p.id === view.id) ?? PROJECTS[0] : null;

  return (
    <>
      <Cursor />
      <div className="grain" aria-hidden />

      <AnimatePresence mode="wait">
        {view.name === "home" || !project ? (
          <motion.div key="home" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <Navbar onNav={onNav} />
            <main>
              <Hero />
              <Intro onNav={onNav} />
              <Projects onOpen={openProject} />
              <BeforeAfter />
              <Materials />
              <Services onNav={onNav} />
              <Studio />
              <Process />
              <Journal />
              <Contact />
            </main>
            <Footer onNav={onNav} />
          </motion.div>
        ) : (
          <ProjectDetail
            key={project.id}
            project={project}
            onBack={goHome}
            onNext={openProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}
