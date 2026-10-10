const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span
          style={{
            fontFamily: "var(--ff-m)",
            fontSize: 12,
            color: "var(--mw)",
          }}
        >
          © {new Date().getFullYear()} Ibelachi Chinedu —{" "}
          <span style={{ color: "var(--s)" }}>
            Built with React + TypeScript
          </span>
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {["Back to top"].map((l, i) => (
            <a
              key={l}
              href={i === 2 ? "#" : "#"}
              style={{
                fontFamily: "var(--ff-m)",
                fontSize: 11,
                color: "var(--hv)",
                textDecoration: "none",
                letterSpacing: ".06em",
                transition: "color .25s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--s)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--hv)")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
