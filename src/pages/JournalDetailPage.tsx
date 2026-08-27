import { useParams, Link } from "react-router-dom";
import programming_journal from "../assets/programming_journal.json";
import { ProgrammingJournalItem } from "../components/JournalCard";
import { LuArrowLeft, LuCalendar, LuClock, LuTag } from "react-icons/lu";

export default function JournalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const journalData = programming_journal as ProgrammingJournalItem[];

  const currentIndex = journalData.findIndex(
    (item) => item.id === id || encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, "-")) === id
  );

  const journal = journalData[currentIndex];
  const prevJournal = currentIndex > 0 ? journalData[currentIndex - 1] : null;
  const nextJournal = currentIndex < journalData.length - 1 ? journalData[currentIndex + 1] : null;

  if (!journal) {
    return (
      <div className="py-12 text-center space-y-6">
        <h1 className="text-2xl font-bold">Journal Entry Not Found</h1>
        <p className="text-base-content/60 text-sm">
          The programming journal entry you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/journals"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <LuArrowLeft /> Back to All Journals
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Blog Post Header */}
      <article className="space-y-8">
        <header className="space-y-4">
          {journal.tags && journal.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {journal.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  <LuTag className="text-[10px]" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-base-content tracking-tight leading-tight">
            {journal.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-base-content/50 border-b border-base-content/10 pb-6">
            <span className="flex items-center gap-1.5">
              <LuCalendar className="text-base-content/40" />
              {journal.date}
            </span>
            {journal.readTime && (
              <span className="flex items-center gap-1.5">
                <LuClock className="text-base-content/40" />
                {journal.readTime}
              </span>
            )}
            <span>By Nelson Dela Torre</span>
          </div>
        </header>

        {/* Blog Content Body */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-base sm:text-[16px] leading-relaxed space-y-6 text-base-content/90">
          {journal.content && journal.content.length > 0 ? (
            journal.content.map((paragraph, index) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="font-heading font-bold text-lg sm:text-xl text-base-content pt-4 border-t border-base-content/10"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }

              if (paragraph.startsWith("```")) {
                const cleanCode = paragraph.replace(/```[a-z]*/g, "").trim();
                return (
                  <pre
                    key={index}
                    className="p-4 rounded-xl bg-base-200/80 border border-base-content/10 font-mono text-xs sm:text-sm overflow-x-auto text-base-content"
                  >
                    <code>{cleanCode}</code>
                  </pre>
                );
              }

              return (
                <p key={index} className="text-base-content/85 leading-relaxed">
                  {paragraph}
                </p>
              );
            })
          ) : (
            <p className="text-base-content/80">{journal.description}</p>
          )}
        </div>
      </article>

      {/* Post Footer Navigation */}
      <nav className="pt-8 border-t border-base-content/10 flex flex-col sm:flex-row justify-between gap-4 text-sm">
        {prevJournal ? (
          <Link
            to={`/journals/${prevJournal.id}`}
            className="group flex flex-col text-left p-3 rounded-xl border border-base-content/10 hover:border-base-content/25 transition-all max-w-[50%]"
          >
            <span className="text-xs text-base-content/50 flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
              <LuArrowLeft /> Previous Journal
            </span>
            <span className="font-semibold text-base-content group-hover:text-primary transition-colors truncate">
              {prevJournal.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextJournal ? (
          <Link
            to={`/journals/${nextJournal.id}`}
            className="group flex flex-col text-right p-3 rounded-xl border border-base-content/10 hover:border-base-content/25 transition-all max-w-[50%] ml-auto"
          >
            <span className="text-xs text-base-content/50 flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
              Next Journal &rarr;
            </span>
            <span className="font-semibold text-base-content group-hover:text-primary transition-colors truncate">
              {nextJournal.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
