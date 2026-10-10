import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [stk, setStk] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const baseHref = location.pathname === "/" ? "" : "/";
  useEffect(() => {
    const fn = () => setStk(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About", "Projects", "Experience", "Skills", "Contact"];
  const phoneNumber = "2349069405382";
  const message =
    "Hey Ibelachi, I'd like to connect regarding a frontend development opportunity.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <nav className={`navbar ${stk ? "stk" : ""}`}>
      <div className="nav-wrap">
        <Link to={"/"} className="nav-logo">
          <Code2 size={14} color="var(--s)" />
          Ibelachi<span>.Chinedu</span>
        </Link>
        <div className="nav-links only-desk">
          {links.map((l) => (
            <a
              key={l}
              className="nav-a"
              href={`${baseHref}#${l.toLowerCase()}`}
            >
              {l}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
            style={{ marginLeft: 8 }}
          >
            Hire Me
          </a>
        </div>
        <button
          className="only-mob"
          onClick={() => setOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--dw)",
            padding: 8,
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div
          style={{
            background: "rgba(10,12,23,0.98)",
            padding: "20px 24px 28px",
            borderTop: "1px solid rgba(13,138,255,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              className="nav-a"
              href={`${baseHref}#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "16px 0",
                fontSize: 16,
                fontWeight: 400,
                borderBottom: "1px solid rgba(64,81,107,0.2)",
                borderRadius: 0,
              }}
            >
              {l}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-blue btn-md"
            style={{
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
