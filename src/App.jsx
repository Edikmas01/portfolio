import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";


function App() {

  return (
    <div className="App">
      <div className="content">
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
