import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { LuArrowLeft } from "react-icons/lu";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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
    <div className="max-w-[720px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 flex justify-between items-center min-h-[40px]">
      {!isHome ? (
        <button
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
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
