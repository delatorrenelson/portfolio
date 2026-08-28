import { useState } from "react";
import programming_journal from "../assets/programming_journal.json";
import JournalCard, { ProgrammingJournalItem } from "../components/JournalCard";
import { LuSearch } from "react-icons/lu";

export default function JournalsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const journalData = programming_journal as ProgrammingJournalItem[];

  const filteredJournals = journalData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Page Title & Subtitle */}
      <div className="space-y-2">
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-base-content tracking-tight">
          My Programming Journal
        </h1>
        <p className="text-sm sm:text-base text-base-content/70 leading-relaxed max-w-xl">
          A blog-style record of my hands-on experience as a developer, technical troubleshooting, architectural patterns, and continuous learning.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base-content/40 text-sm" />
        <input
          id="journal-search-input"
          type="text"
          placeholder="Search journals or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-base-content/15 bg-base-200/40 text-sm placeholder:text-base-content/40 focus:outline-none focus:border-primary/50 transition-colors"
        />
      </div>

      {/* Journal Entries List */}
      <div id="journals-list" className="flex flex-col border-t border-base-content/10">
        {filteredJournals.length > 0 ? (
          filteredJournals.map((journal, index) => (
            <JournalCard key={journal.id || journal.title || index} journal={journal} />
          ))
        ) : (
          <div className="py-12 text-center text-sm text-base-content/50">
            No journal entries found matching "{searchQuery}".
          </div>
        )}
      </div>
    </div>
  );
}
