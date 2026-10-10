// Added new file for redeployment
// import { Link } from "react-router-dom";
import { Download /*ArrowUpRight*/ } from "lucide-react";
import cvFile from "../assets/Ibelachi_Chinedu_Frontend_Engineer_Resume.pdf";

const Intro = () => {
  return (
    <>
      <section
        className="dot-grid relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--p)", fontFamily: "'Sora', sans-serif" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: 720,
            height: 720,
            borderRadius: "50%",
            top: "-18%",
            right: "-8%",
            background:
              "radial-gradient(circle, rgba(13,138,255,0.07) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 440,
            height: 440,
            borderRadius: "50%",
            bottom: "0%",
            left: "-6%",
            background:
              "radial-gradient(circle, rgba(13,138,255,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="sec-wrap flex items-center text-center justify-center marginalClass">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-32 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
              <div className="flex flex-col gap-6">
                {/* Headline — mirrors reference: plain + accent + accent + plain */}

                <div>
                  <h1
                    className="afu d2 font-bold mb-6"
                    style={{
                      fontSize: "clamp(36px, 5.2vw, 70px)",
                      lineHeight: 1.04,
                      letterSpacing: "-0.03em",
                      color: "var(--dw)",
                    }}
                  >
                    I Facilitate Websites Into
                    <br />
                    a&nbsp;
                    <span style={{ color: "var(--s)" }}>High-Converting</span>
                    <br />
                    <span style={{ color: "var(--s)" }}>Revenue</span>
                    &nbsp;Channel
                  </h1>
                </div>

                {/* Sub-copy */}

                <div className="a-fu d5 w-full flex items-center justify-center mt-4">
                  <p
                    className="afu d3 mb-10 max-w-xl"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.85,
                      color: "var(--mw)",
                    }}
                  >
                    I help brands and businesses build{" "}
                    <span style={{ color: "var(--dw)", fontWeight: 500 }}>
                      fast, and reliable modern web applications
                    </span>{" "}
                    that turn visitors into actual customers, through clean
                    architecture, pixel-perfect UI, and an obsessive performance
                    engineering.
                  </p>
                </div>

                {/* CTAs */}
                <div
                  className="a-fu d5 w-full flex items-center justify-center"
                  style={{
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                    marginBottom: 44,
                    alignItems: "center",
                  }}
                >
                  {/* <Link to={"/projects"} className="btn btn-blue btn-lg">
                    View Projects <ArrowUpRight size={16} />
                  </Link> */}
                  <a
                    href={cvFile}
                    download="Ibelach_chinedu_frontend_engineer_resume.pdf"
                  >
                    <button className="btn btn-outline btn-lg">
                      <Download size={15} /> Download CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
