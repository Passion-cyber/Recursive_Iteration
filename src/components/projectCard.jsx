import { ExternalLink } from "lucide-react";
import { PROJ_GRADIENTS } from "../utils/data";

const ProjectCard = ({ project, index }) => {
  const { id, name, projectImage, desc, tags, preview, live } = project;

  return (
    <div className={`proj-card rv td${(index % 6) + 1}`}>
      {/* Terminal header */}
      <div className="proj-header">
        <div className="proj-dot" style={{ background:"#ff5f57" }}/>
        <div className="proj-dot" style={{ background:"#febc2e" }}/>
        <div className="proj-dot" style={{ background:"#28c840" }}/>
        <span className="proj-filename">~/projects/{name.toLowerCase().replaceAll(" ","-")}</span>
      </div>
      {/* Preview area */}
      <div className="proj-preview" style={{ background:preview }}>
        <div style={{ position:"absolute", inset:0, background:PROJ_GRADIENTS[index % PROJ_GRADIENTS.length] }}/>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(13,138,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(13,138,255,0.04) 1px,transparent 1px)", backgroundSize:"24px 24px" }}/>
        <img src={projectImage} alt={`${name} preview`} className="cover" width={1200} height={530} loading="lazy" decoding="async"/>
      </div>
      {/* Body */}
      <div className="proj-body">
        <div className="proj-num">{id}</div>
        <h3 className="proj-name">{name}</h3>
        <p className="proj-desc">{desc}</p>
        <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:20 }}>
          {tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
        </div>
        <div style={{ height:"1px", background:"rgba(64,81,107,0.25)", marginBottom:20 }}/>
        <div className="proj-links">
          <a href={live} target="_blank" rel="noopener noreferrer" className="proj-link"><ExternalLink size={13}/> Live Link</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
