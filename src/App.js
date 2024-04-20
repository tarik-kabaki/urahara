import "./App.css";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Exp from "./components/exp/exp";
import Intro from "./components/intro/intro";
import Main from "./components/main/main";
import Menu from "./components/menu/menu";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="relative">
      <Main />
      <About />
      <Services />
      <Skills />
      <Exp />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
