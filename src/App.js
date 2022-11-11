import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Features />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
