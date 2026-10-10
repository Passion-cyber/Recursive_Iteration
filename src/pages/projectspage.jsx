import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "../utils/data";
import { ProjectCard } from "../components";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <section id="projects" className="dot-bg" style={{ padding:"148px 0 100px" }}>
      <div className="sec-wrap">
        <Link to="/" className="proj-link a-fu" style={{ marginBottom:32 }}>
          <ArrowLeft size={13}/> Back to home
        </Link>

        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:56, flexWrap:"wrap", gap:20 }}>
          <div className="a-fu d1">
            <span className="sec-num">PROJECTS / ALL</span>
            <h1 className="sec-title">Everything<br/><span className="sec-title-stroke">I've Shipped</span></h1>
          </div>
          <p className="a-fu d2" style={{ fontFamily:"var(--ff-m)", fontSize:12, color:"var(--mw)", letterSpacing:"0.06em" }}>
            <span style={{ color:"var(--s)" }}>{String(PROJECTS.length).padStart(2, "0")}</span> projects
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
