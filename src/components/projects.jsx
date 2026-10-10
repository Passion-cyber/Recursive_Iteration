import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../utils/data"
import ProjectCard from "./projectCard";

const FEATURED_COUNT = 4;

const Projects = () => {
    return (
    <section id="projects" style={{ padding:"100px 0" }}>
      <div className="sec-wrap">
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:56, flexWrap:"wrap", gap:20 }}>
          <div className="rv">
            <span className="sec-num">02 / PROJECTS</span>
            <h2 className="sec-title">Proof of<br/><span className="sec-title-stroke">Work/Concept</span></h2>
          </div>
        </div>

        <div className="proj-grid">
          {PROJECTS.slice(0, FEATURED_COUNT).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i}/>
          ))}
        </div>

        <div className="rv" style={{ display:"flex", justifyContent:"center", marginTop:48 }}>
          <Link to="/projects" className="btn btn-blue btn-lg">
            View All Projects <ArrowUpRight size={15}/>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Projects;
