import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import JournalsPage from "./pages/JournalsPage";
import JournalDetailPage from "./pages/JournalDetailPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import ScrollButton from "./components/ScrollButton";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journals" element={<JournalsPage />} />
          <Route path="/journals/:id" element={<JournalDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ScrollButton />
    </Router>
  );
}

export default App;
