import Carousel from "./components/Carousel";
import Smartphone from "./components/Smartphone";
import AdminForm from "./components/AdminForm";
import { data } from "./api/fakeData";

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="container">
        <AdminForm />
        <Smartphone props={data} />
      </div>
    </div>
  );
}

export default App;
