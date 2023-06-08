import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Residiencies from "./components/residiencies/Residiencies";
import "./App.css";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getstarted/GetStarted";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residiencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}


export default App;
