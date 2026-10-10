import { useState, useEffect, useMemo } from "react";
// import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Download,
  // GitHub,
  // Linkedin,
  // Twitter,
  // Mail,
  // MapPin
} from "lucide-react";
// import user_image from "../assets/ibelachi_chinedu_Image.jpg";
// import user_image from "../assets/_4JJESMqYUfu-Yk9-nUdCTQ_2DQ9igatTaOWAaY_OHoTtw_cover.png";
import user_image from "../assets/b84b01fd-0b28-4726-92b2-0460e749d673.jpeg";
import cvFile from "../assets/Ibelachi_Chinedu_Frontend_Engineer_Resume.pdf";
const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const titles = useMemo(
    () => [
      "Full-Stack Engineer",
      "React & Node.js Dev",
      "UI Systems Lead",
      "Performance Eng.",
    ],
    [],
  );

  useEffect(() => {
    const id = setInterval(
      () => setTitleIdx((i) => (i + 1) % titles.length),
      3200,
    );
    return () => clearInterval(id);
  }, [titles.length]);

  return (
    <section className="hero dot-bg">
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(13,138,255,0.06),transparent 70%)",
          top: "-10%",
          right: "-5%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(13,138,255,0.04),transparent 70%)",
          bottom: "-5%",
          left: "10%",
          pointerEvents: "none",
        }}
      />

      <div
        className="sec-wrap"
        style={{
          width: "100%",
          position: "relative",
          zIndex: 1,
          paddingTop: 40,
          paddingBottom: 100,
        }}
      >
        <div
          className="hero-layout"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 80,
            justifyContent: "space-between",
          }}
        >
          {/* Left Copy */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Status badge */}
            {/* <div className="a-fu d1" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"7px 16px", borderRadius:100, border:"1px solid rgba(34,197,94,0.3)", background:"rgba(34,197,94,0.06)", marginBottom:32 }}>
              <span className="status-dot"/>
              <span style={{ fontFamily:"var(--ff-m)", fontSize:11, color:"#86efac", letterSpacing:".1em" }}>OPEN TO WORK</span>
            </div> */}
            {/* Name */}
            <h1 className="hero-name a-fu d2">
              Ibelachi
              <br />
              <em>Franklyn</em>
            </h1>
            {/* Animated title */}
            <div
              className="a-fu d3"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                marginTop: 20,
                marginBottom: 24,
                height: 28,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--ff-m)",
                  fontSize: 13,
                  color: "var(--s)",
                  letterSpacing: ".08em",
                }}
              >
                {titles[titleIdx]}
              </span>
              <span className="cursor-blink" />
            </div>
            {/* Location */}
            {/* <div className="a-fu d3" style={{ display:"flex", alignItems:"center", gap:8, marginBottom:28 }}>
              <MapPin size={13} color="var(--mw)"/>
              <span style={{ fontFamily:"var(--ff-m)", fontSize:11, color:"var(--mw)", letterSpacing:".06em" }}>SAN FRANCISCO, CA</span>
              <span style={{ margin:"0 6px", color:"rgba(171,176,192,0.3)" }}>·</span>
              <span style={{ fontFamily:"var(--ff-m)", fontSize:11, color:"var(--mw)", letterSpacing:".06em" }}>8+ YRS EXP</span>
            </div> */}
            {/* Bio */}
            <p
              className="a-fu d4"
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--mw)",
                maxWidth: 520,
                marginBottom: 40,
              }}
            >
              I'm a Full-Stack Developer who builds fast, accessible web
              applications end to end, from polished React interfaces to the
              APIs, databases, and deployments behind them.{" "}
              <span style={{ color: "var(--dw)", fontWeight: 500 }}>
                I partner with startups and businesses to turn ideas
              </span>{" "}
              into production-ready products, pairing clean, scalable code
              with thoughtful user experiences.
            </p>

            {/* CTAs */}
            <div className="hero-ctas a-fu d5">
              <a className="btn btn-blue btn-lg" href={`#projects`}>
                View Projects <ArrowUpRight size={16} />
              </a>
              <a
                className="btn btn-outline btn-lg"
                href={cvFile}
                download="Ibelach_chinedu_frontend_engineer_resume.pdf"
              >
                <Download size={15} /> Download CV
              </a>
            </div>
            {/* Socials */}
            {/* <div className="a-fu d6" style={{ display:"flex", gap:10 }}>
              {[
                [GitHub, "github.com/alexchen"],
                [Linkedin, "linkedin.com/in/alexchen"],
                [Twitter, "@alexchen_dev"],
                [Mail, "hello@alexchen.dev"],
              ].map(([Icon, label]) => (
                <button key={label} className="social-btn" title={label}><Icon size={16}/></button>
              ))}
            </div> */}
          </div>

          {/* Right — Photo */}
          <div className="photo-area a-sr d3">
            <div className="photo-frame">
              {/* Orbital rings */}
              <div
                className="photo-ring-outer a-spin"
                style={{ position: "absolute" }}
              />
              <div
                className="photo-ring-inner a-spin-r"
                style={{ position: "absolute" }}
              />

              {/* Orbit dots */}
              {/* {[0, 90, 180, 270].map((deg, i) => (
                <div
                  key={i}
                  className="photo-orbit-dot"
                  style={{
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 212}px - 4px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 212}px - 4px)`,
                    opacity: i % 2 === 0 ? 1 : 0.4,
                  }}
                />
              ))} */}

              {/* Corner brackets */}
              <div className="photo-bracket pb-tl" />
              <div className="photo-bracket pb-tr" />
              <div className="photo-bracket pb-bl" />
              <div className="photo-bracket pb-br" />

              {/* Inner frame */}
              <div className="photo-inner">
                {/* Scan overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(10,22,40,0) 0%, rgba(10,22,40,0.6) 100%)",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
                {/* Grid lines */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(13,138,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(13,138,255,0.04) 1px,transparent 1px)",
                    backgroundSize: "40px 40px",
                    pointerEvents: "none",
                  }}
                />
                {/* Initials */}
                {/* <span className="photo-initials">AC</span> */}
                <img src={user_image} alt="user_image" className="photo-img" />
                {/* Caption */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--ff-m)",
                      fontSize: 10,
                      color: "var(--s)",
                      letterSpacing: ".14em",
                      marginBottom: 4,
                    }}
                  >
                    // profile
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--ff-d)",
                      fontSize: 22,
                      fontWeight: 500,
                      color: "var(--dw)",
                      lineHeight: 1.1,
                    }}
                  >
                    Ibelachi Chinedu
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--ff-m)",
                      fontSize: 11,
                      color: "var(--mw)",
                      marginTop: 4,
                    }}
                  >
                    Fillstack Engineer (Front-end Heavy)
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              {/* <div className="photo-tag-card a-float" style={{ top:-24, right:-36 }}>
                <span className="photo-tag-val">8+</span>
                Years Experience
              </div>
              <div className="photo-tag-card a-float" style={{ animationDelay:"2.5s", bottom:10, left:-44 }}>
                <span className="photo-tag-val">60+</span>
                Projects Shipped
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.35,
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(180deg,var(--s),transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--ff-m)",
            fontSize: 9,
            letterSpacing: ".2em",
            color: "var(--mw)",
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
};

export default Hero;
