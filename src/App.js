
import "bootstrap/dist/css/bootstrap.min.css"

import { Header } from "./layout/Header/Header";
import { Sidebar } from "./layout/Sidebar/Sidebar";
import { Footer } from "./layout/Footer/Footer";
import './index.css';
import { ToDoList } from "./pages/ToDoList/ToDoList";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";
import { NotFound } from "./pages/NotFound/NotFound";
import { ProductAdmin } from "./pages/ProductAdmin/ProductAdmin";
import { AdminRoute } from "./guard/AdminRoute/AdminRoute";

function App() {

return (
//Debe tener un div padre para que se pueda leer el hmtl o podemos dejar sin contenedor padre. Ej: return(<h1>Lista de tareas</h1>)
    <>
      <Header />
      <div className="d-flex main-container">
        <Sidebar />
        <div className="w-100 p-3">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo-list" element={<ToDoList />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="product-admin" 
                   element={<AdminRoute>
                              <ProductAdmin />
                            </AdminRoute>} />
            
            
            
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <Footer />
      
    </>
  );
}

export default App;
