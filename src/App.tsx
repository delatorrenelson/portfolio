import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import JournalsPage from "./pages/JournalsPage";
import JournalDetailPage from "./pages/JournalDetailPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import ScrollButton from "./components/ScrollButton";
import { FeatureConfigProvider, useFeatureConfig } from "./hooks/useFeatureConfig";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const { isFeatureEnabled } = useFeatureConfig();

  const isJournalPageEnabled = isFeatureEnabled("programming_journal.journals_page");
  const isContactPageEnabled = isFeatureEnabled("contact_page");

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {isJournalPageEnabled && (
          <>
            <Route path="/journals" element={<JournalsPage />} />
            <Route path="/journals/:id" element={<JournalDetailPage />} />
          </>
        )}
        {isContactPageEnabled && <Route path="/contact" element={<ContactPage />} />}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <FeatureConfigProvider>
      <Router>
        <ScrollToTop />
        <AppRoutes />
        <ScrollButton />
      </Router>
    </FeatureConfigProvider>
  );
}

export default App;
