import { SKILLS } from "../utils/data";
import { useState, useEffect, useRef} from "react"

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
 
  return (
    <section
     id="skills" style={{ padding:"100px 0", background:"rgba(10,22,40,0.4)", borderTop:"1px solid rgba(13,138,255,0.06)", borderBottom:"1px solid rgba(13,138,255,0.06)" }}>
      <div className="sec-wrap">
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:60, flexWrap:"wrap", gap:20 }}>
          <div className="rv">
            <span className="sec-num">04 / SKILLS</span>
            <h2 className="sec-title">Tech<br/><em style={{ color:"var(--s)" }}>Arsenal</em></h2>
          </div>
          <p className="rv td2" style={{ fontSize:14.5, color:"var(--mw)", maxWidth:360, lineHeight:1.75, textAlign:"right" }}>
            Full-stack across the JavaScript ecosystem, from React interfaces to Node.js APIs and the databases behind them. Always learning, always shipping.
          </p>
        </div>
 
        <div ref={ref} style={{ display:"flex", flexDirection:"column", gap:40 }}>
          {SKILLS.map(({ cat, items }, ci) => (
            <div key={cat} className={`rv td${ci+1}`}>
              <span className="skill-cat-label">{cat}</span>
              <div className="skill-grid">
                {items.map(({ n, w }, i) => (
                  <div key={n} className="skill-card">
                    <div className="skill-name">{n}</div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{
                        "--w": animated ? w : "0%",
                        width: animated ? w : "0%",
                        transition: `width 1s cubic-bezier(.16,1,.3,1) ${0.1 * (ci * 4 + i)}s`,
                      }}/>
                    </div>
                    <div className="skill-pct">{w}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills