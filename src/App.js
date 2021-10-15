import Carousel from "./components/Carousel";
import SmartphoneCard from "./components/SmartphoneCard";
import AdminForm from "./components/AdminForm";
import SignUp from "./components/auth/SigunUp";
import Login from "./components/auth/Login";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div className="container">
          <Header />
          <SignUp />
          <SmartphoneCard />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
