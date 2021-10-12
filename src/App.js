import Carousel from "./components/Carousel";
import SmartphoneCard from "./components/SmartphoneCard";
import AdminForm from "./components/AdminForm";
import SignUp from "./components/SigunUp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SignUp />
        <SmartphoneCard />
      </div>
    </div>
  );
}

export default App;
