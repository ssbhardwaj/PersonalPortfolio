import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import SoftSkills from "./Components/SoftSkills/SoftSkills";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
// import './public/index'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Works/>
      <Experience/>
      <Portfolio/>
      <Skills/>
      <SoftSkills/>
      <Footer/>
    </div>
  );
}

export default App;
