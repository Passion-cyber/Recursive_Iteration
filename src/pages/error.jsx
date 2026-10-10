import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020B18] px-6 overflow-hidden">
      {/* Ghost 404 backdrop */}
      <span
        aria-hidden="true"
        className="absolute select-none font-bold leading-none tracking-tighter pointer-events-none top-1/2 -translate-y-1/2"
        style={{
          fontSize: "clamp(8rem, 30vw, 22rem)",
          color: "rgba(13, 138, 255, 0.05)",
        }}
      >
        404
      </span>

      {/* Radial glow behind content */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(13,138,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0d8aff]/10 border border-[#0d8aff]/30 rounded-full px-4 py-1.5 text-[11px] tracking-widest uppercase text-[#0d8aff] mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
            <path d="M10 7l0 .01" />
            <path d="M10 13l0 -3" />
          </svg>
          Error 404
        </div>

        {/* 404 number */}
        <h1
          className="font-bold tracking-tighter leading-none mb-4"
          style={{
            fontSize: "clamp(5rem, 15vw, 8rem)",
            background: "linear-gradient(135deg, #0d8aff 0%, #63bbff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Divider */}
        <div className="w-12 h-px bg-[#0d8aff]/30 mx-auto mb-6" />

        {/* Heading */}
        <h2 className="text-2xl font-medium text-white mb-4 leading-snug">
          Page not found
        </h2>

        {/* Body */}
        <p className="text-[#4A7FA8] leading-relaxed mb-10 text-[0.95rem]">
          The page you're looking for doesn't exist, may have been moved, or the
          URL might be incorrect.
        </p>

        {/* CTA */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 bg-[#0d8aff] hover:bg-[#0a72d4] text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_24px_rgba(13,138,255,0.35)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
