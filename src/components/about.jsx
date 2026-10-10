const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "100px 0",
        background: "var(--p)",
        borderTop: "1px solid rgba(13,138,255,0.06)",
      }}
    >
      <div className="sec-wrap ">
        <div
          className="about-cols rv"
          style={{ display: "flex", gap: 80, alignItems: "flex-start" }}
        >
          {/* Left — Big title */}
          <div style={{ flex: "0 0 auto" }}>
            <span className="sec-num">01 / ABOUT</span>
            <h2 className="sec-title">
              Building
              <br />
              <span className="sec-title-stroke">web apps</span>
              <br />
              front to
              <br />
              <em style={{ color: "var(--s)", fontStyle: "italic" }}>
                back.
              </em>
            </h2>
            {/* Stats row */}
            {/* <div style={{ display:"flex", gap:36, marginTop:48 }}>
              {[["8+","Years of craft"],["60+","Projects shipped"],["3×","Performance avg."]].map(([val,label]) => (
                <div key={label}>
                  <div className="about-stat">{val}</div>
                  <div className="about-stat-l">{label}</div>
                </div>
              ))}
            </div> */}
          </div>
          {/* Right — Text + tags */}
          <div style={{ flex: 1, paddingTop: 16 }}>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.85,
                color: "var(--mw)",
                marginBottom: 24,
              }}
            >
              Since 2018, I've been turning ideas into complete, production-ready
              web applications. On the frontend I work with{" "}
              <span style={{ color: "var(--dw)", fontWeight: 500 }}>
                React, Next.js, and TypeScript;
              </span>{" "}
              on the backend I design REST APIs with{" "}
              <span style={{ color: "var(--dw)", fontWeight: 500 }}>
                Node.js and Express,
              </span>{" "}
              backed by SQL and NoSQL databases. I own features end to end, from
              data model and API contract to a fast, accessible interface, and
              see them through to deployment.
            </p>

            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.85,
                color: "var(--mw)",
                marginBottom: 32,
              }}
            >
              I enjoy the problems that sit between the layers: shaping data so
              the UI stays simple, keeping APIs secure and predictable, and
              making the whole stack fast.{" "}
              <span style={{ color: "var(--dw)", fontWeight: 500 }}>
                The goal is always the same: reliable products that deliver
                measurable value
              </span>{" "}
              to the people who use them and the businesses behind them.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                "React & Next.js",
                "Node.js & Express",
                "TypeScript",
                "REST APIs",
                "Databases",
                "System Design",
                "Web Performance",
                "Accessibility",
                "CI/CD",
              ].map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                </span>
              ))}
            </div>
            {/* Code snippet flavour */}
            <div
              style={{
                marginTop: 36,
                padding: "20px 24px",
                background: "var(--md)",
                borderRadius: 8,
                border: "1px solid rgba(13,138,255,0.1)",
                fontFamily: "var(--ff-m)",
                fontSize: 12,
              }}
            >
              <div style={{ color: "rgba(13,138,255,0.5)", marginBottom: 8 }}>
                // philosophy.ts
              </div>
              <div>
                <span style={{ color: "#7dd3fc" }}>const</span>
                <span style={{ color: "var(--dw)" }}> stack </span>
                <span style={{ color: "var(--mw)" }}>= </span>
                <span style={{ color: "#86efac" }}>
                  "UI + API + database"
                </span>
                <span style={{ color: "var(--mw)" }}>;</span>
              </div>
              <div style={{ marginTop: 4 }}>
                <span style={{ color: "#7dd3fc" }}>const</span>
                <span style={{ color: "var(--dw)" }}> goal </span>
                <span style={{ color: "var(--mw)" }}>= </span>
                <span style={{ color: "#f9a8d4" }}>ship</span>
                <span style={{ color: "var(--mw)" }}>(</span>
                <span style={{ color: "var(--dw)" }}>stack</span>
                <span style={{ color: "var(--mw)" }}>);</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
