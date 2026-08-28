import Header from "../components/Header";
import Projects from "../components/Projects";
import ProgrammingJournal from "../components/ProgrammingJournal";
import Skills from "../components/Skills";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import { useFeatureConfig } from "../hooks/useFeatureConfig";

export default function Home() {
  const { isFeatureEnabled } = useFeatureConfig();

  return (
    <div className="space-y-16">
      {isFeatureEnabled("header") && <Header />}
      {isFeatureEnabled("work_experience") && <WorkExperience />}
      {isFeatureEnabled("projects") && <Projects />}
      {isFeatureEnabled("programming_journal") && <ProgrammingJournal />}
      {isFeatureEnabled("skills") && <Skills />}
      {isFeatureEnabled("education") && <Education />}
    </div>
  );
}
