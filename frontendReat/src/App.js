import "./App.css";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Inauguracion from "./components/layout/Inauguramos";
import Carrusel from "./components/layout/Carrusel";
import LoginVar from "./components/layout/logginVar";
import Actividades from "./components/layout/Actividades";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <LoginVar></LoginVar>
      <Inauguracion></Inauguracion>
      <Carrusel></Carrusel>
      <Actividades></Actividades>
      <Footer></Footer>
    </div>
  );
}

export default App;
