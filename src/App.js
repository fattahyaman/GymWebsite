import "./App.css";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Reason from "./components/Reasons/Reason";
import Plan from "./components/Plans/Plan";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plan />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
