import SmartphoneCard from "./components/Smartphone/SmartphoneCard";
import AdminForm from "./components/Adminstration/AdminForm";
import SignUp from "./components/auth/SigunUp";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Info from "./components/Smartphone/Info";
import Review from "./components/Smartphone/Review";
import About from "./components/UI/About";
import AccessDenied from "./components/UI/AccessDenied";
import Nothing from "./components/UI/Nothing";
import ProtectedRoute from "./navigation/ProtectedRoute";
import Smartphones from "./components/Smartphone/Smartphones";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/UI/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <AuthProvider>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/unauthorized"
                component={AccessDenied}
                className="x"
              />
              <Route path="/smartphones" component={Smartphones} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/smartphoneInfo/:id">
                <Info />
              </Route>
              <Route path="/smartphoneReview/:id">
                <Review />
              </Route>
              <ProtectedRoute path="/admin">
                <AdminForm />
              </ProtectedRoute>
              <Route path="/*">
                <Nothing />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
