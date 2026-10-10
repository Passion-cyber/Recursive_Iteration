import "./App.css";
import { useEffect } from "react";
import { Navbar, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import { Landingpage, Error, ProjectsPage } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".rv, .rvl, .rvr")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
