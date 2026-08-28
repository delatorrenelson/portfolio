import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { LuArrowLeft } from "react-icons/lu";
import { useFeatureConfig } from "../hooks/useFeatureConfig";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isFeatureEnabled } = useFeatureConfig();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isJournalDetail = location.pathname.startsWith("/journals/");

  // Explicit, predictable back navigation
  const handleBack = () => {
    if (isJournalDetail) {
      navigate("/journals");
    } else {
      navigate("/");
    }
  };

  const getBackLabel = () => {
    if (isJournalDetail) {
      return "All Journals";
    }
    return "Back to Portfolio";
  };

  return (
    <div id="nav-bar" className="max-w-[720px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 flex justify-between items-center min-h-[40px]">
      {!isHome ? (
        <button
          id="nav-back-btn"
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-base-content/60 hover:text-base-content transition-colors group cursor-pointer"
        >
          <LuArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>{getBackLabel()}</span>
        </button>
      ) : (
        <div />
      )}
      {isFeatureEnabled("theme_toggle") ? (
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      ) : (
        <div />
      )}
    </div>
  );
}
