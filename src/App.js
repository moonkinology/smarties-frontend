import Carousel from "./components/Carousel";
import SmartphoneCard from "./components/SmartphoneCard";
import AdminForm from "./components/AdminForm";
import SignUp from "./components/SigunUp";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Login />
        <SmartphoneCard />
      </div>
    </div>
  );
}

export default App;
