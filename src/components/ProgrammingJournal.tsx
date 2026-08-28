import { Link } from "react-router-dom";
import programming_journal from "../assets/programming_journal.json";
import SectionHeader from "./SectionHeader";
import JournalCard, { ProgrammingJournalItem } from "./JournalCard";
import { LuMoveRight } from "react-icons/lu";
import { useFeatureConfig } from "../hooks/useFeatureConfig";

export default function ProgrammingJournal() {
  const journalData = programming_journal as ProgrammingJournalItem[];
  const { isFeatureEnabled } = useFeatureConfig();

  return (
    <section id="journals">
      <SectionHeader title="Programming Journal" />
      <div className="flex flex-col border-t border-base-content/10">
        {journalData.slice(0, 4).map((journal, index) => (
          <JournalCard key={journal.id || journal.title || index} journal={journal} />
        ))}
      </div>
      {isFeatureEnabled("programming_journal.journals_page") && (
        <div className="mt-5">
          <Link
            id="all-journals-link"
            to="/journals"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-base-content/60 hover:text-base-content underline decoration-base-content/30 underline-offset-4 transition-colors"
          >
            All Journals <LuMoveRight className="inline-block ml-1" />
          </Link>
        </div>
      )}
    </section>
  );
}
