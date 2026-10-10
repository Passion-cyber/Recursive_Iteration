import {
  Hero,
  // Intro,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from "../components";
import { useEffect } from "react";
const Landingpage = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".rv, .rvl, .rvr")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      {/* <Intro /> */}
    </>
  );
};

export default Landingpage;
