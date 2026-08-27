import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";

export default function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <footer className="pt-12 pb-8 border-t border-base-content/10 text-sm text-base-content/60 font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <p>Based in Manila, Philippines.</p>
      {!isContactPage && (
        <span id="mail_footer" className="text-base-content/40 text-left sm:text-right">
          Project and Tech inquiries?{" "}
          <Link
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
