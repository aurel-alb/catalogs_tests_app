import "./App.css";
import Catalog from "./Catalog"

function App() {
const listaElevi = ["Rebeca", "Andrei", "Ioan"]
const listaElevi2 = ["Ana", "Ioana", "Maria"]
  return (
    <div className="wrapper">
      <h1>Catalogs</h1>
      <Catalog 
      title = {"FirstCatalog"} 
      numeElev = {"Ionut"} 
      listaElevi = {listaElevi}/>
      <Catalog 
      title = {"SecondCatalog"} 
      numeElev = {"Rebeca"} 
      listaElevi = {listaElevi2}/>
    </div>
  );
}

export default App;
