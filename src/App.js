import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LandingPage from "./Pages/LandingPage/page";

function App() {
  return (
    <div className="bg-purple-300">
      <LandingPage />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
