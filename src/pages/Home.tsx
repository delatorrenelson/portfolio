import Header from "../components/Header";
import Projects from "../components/Projects";
import ProgrammingJournal from "../components/ProgrammingJournal";
import Skills from "../components/Skills";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="space-y-16">
      <Header />
      <WorkExperience />
      <Projects />
      <ProgrammingJournal />
      <Skills />
      <Education />
    </div>
  );
}
