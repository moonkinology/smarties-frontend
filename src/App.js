import SmartphoneCard from "./components/SmartphoneCard";
import AdminForm from "./components/AdminForm";
import SignUp from "./components/auth/SigunUp";
import Login from "./components/auth/Login";
import Main from "./components/Main";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
