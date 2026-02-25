/** COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
