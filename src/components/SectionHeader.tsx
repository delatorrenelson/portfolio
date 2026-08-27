import React from "react";

function SectionHeader({ title }: { title: string; subtitle?: string }) {
  return (
    <div className="pt-8 mb-5">
      <div className="flex items-center gap-4">
        <h2 className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-base-content/40 flex-none">
          {title}
        </h2>
        {/* <div className="h-[1px] flex-1 bg-base-content/10"></div> */}
      </div>
    </div>
  );
}

export default SectionHeader;