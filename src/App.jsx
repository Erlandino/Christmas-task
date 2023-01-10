// Imports
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Greetings from "./components/Greetings";

// Main component containing all the other components
function App() {
  return (
    <div className="App">
      <Countdown />
      <Greetings />
      <Footer />
    </div>
  );
}

export default App;
