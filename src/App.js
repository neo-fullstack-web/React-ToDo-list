import FormTareas from "./components/FormTareas";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
//Fuera del return va la logica de javaScript

  return (
//Debe tener un div padre para que se pueda leer el hmtl o podemos dejar sin contenedor padre. Ej: return(<h1>Lista de tareas</h1>)

    <div className="bg-warning m-5 p-5">
      <Titulo/>
      <Subtitulo/>
      <FormTareas/>
    </div>
  );
}

export default App;
