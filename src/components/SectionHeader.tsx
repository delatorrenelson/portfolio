import React from "react";

function SectionHeader({ title }: { title: string; subtitle?: string }) {
  return (
    <h2 className="pt-8 mb-5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-base-content/40">
      {title}
    </h2>
  );
}

export default SectionHeader;