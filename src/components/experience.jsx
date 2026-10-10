import { Calendar } from "lucide-react";
import { EXPERIENCE } from "../utils/data"

const Experience = () => {
  return (
    <section id="experience" style={{ padding:"100px 0", background:"rgba(10,22,40,0.3)", borderTop:"1px solid rgba(13,138,255,0.06)" }}>
      <div className="sec-wrap">
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:60, flexWrap:"wrap", gap:20 }}>
          <div className="rv">
            <span className="sec-num">03 / EXPERIENCE</span>
            <h2 className="sec-title">Career<br/><em style={{ color:"var(--s)" }}>Journey</em></h2>
          </div>
          <p className="rv td2" style={{ fontSize:14.5, color:"var(--mw)", maxWidth:300, lineHeight:1.75, textAlign:"right" }}>
            Over four (4) years of building products people love, at companies that set the standard.
          </p>
        </div>
 
        <div className="exp-wrap" style={{ paddingLeft:12 }}>
          <div className="exp-line"/>
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {EXPERIENCE.map(({ company, role, date, desc, tags }, i) => (
              <div key={company} className={`rv td${i+1}`} style={{ display:"flex", gap:0, alignItems:"flex-start", paddingBottom: i < EXPERIENCE.length-1 ? 40 : 0 }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:0, flexShrink:0 }}>
                  <div className="exp-dot" style={{ marginTop:28 }}/>
                </div>
                <div className="exp-card" style={{ flex:1 }}>
                  <div className="exp-row" style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:12, gap:16, flexWrap:"wrap" }}>
                    <div>
                      <h3 className="exp-company">{company}</h3>
                      <p className="exp-role">{role}</p>
                    </div>
                    <span className="exp-date"><Calendar size={12}/>{date}</span>
                  </div>
                  <p className="exp-desc">{desc}</p>
                  <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginTop:18 }}>
                    {tags.map(t => <span key={t} className="exp-pill">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Experience;