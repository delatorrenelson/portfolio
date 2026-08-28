import { Link, useLocation } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import { useFeatureConfig } from "../hooks/useFeatureConfig";

export default function Footer() {
  const location = useLocation();
  const { isFeatureEnabled } = useFeatureConfig();

  const isContactPage = location.pathname === "/contact";
  const showSayHiLink = !isContactPage && isFeatureEnabled("contact_page") && isFeatureEnabled("footer.say_hi_link");

  return (
    <footer id="footer-section" className="pt-12 pb-8 border-t border-base-content/10 text-sm text-base-content/60 font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <p>Based in Manila, Philippines.</p>
      {showSayHiLink && (
        <span id="mail_footer" className="text-base-content/40 text-left sm:text-right">
          Project and Tech inquiries?{" "}
          <Link
            id="footer-say-hi-link"
            to="/contact"
            className="underline underline-offset-4 decoration-base-content/30 hover:text-base-content transition-colors"
          >
            Say hi
            <LuMoveRight className="inline-block ml-1" />
          </Link>
        </span>
      )}
    </footer>
  );
}
