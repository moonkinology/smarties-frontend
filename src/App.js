import Carousel from "./components/Carousel";
import Smartphone from "./components/Smartphone";
import AdminForm from "./components/AdminForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <AdminForm />
        <Smartphone />
      </div>
    </div>
  );
}

export default App;
