import FormTareas from "./components/FormTareas";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap";
import { TaskList } from "./components/TaskList/TaskList";
import { useState } from "react";

const taskListConst = JSON.parse(localStorage.getItem('tasks')) || [];
// [
//   { detail: 'Lavar la ropa', id: 1001, done: true },
//   { detail: 'Limpiar la habitación', id: 1002, done: false },
//   { detail: 'Darle de comer a la gatita', id: 1003, done: false },
//   { detail: 'Limpiar el auto', id: 1004, done: true },
//   { detail: 'Cocinar la comida de mañana', id: 1005, done: false },
// ]

function App() {
//Fuera del return va la logica de javaScript
const [taskList, setTaskList] = useState(taskListConst);


function addNewTask(task) {
  const updList = taskList.map(t => t)
  updList.push(task);
  localStorage.setItem('tasks', JSON.stringify(updList))
  setTaskList(updList)
  // setTaskList([...taskList, task])
}

function deleteTask(idx) {
  const arrayWithoutDeletedTask = taskList.filter(tarea => tarea.id !== idx);
  localStorage.setItem('tasks', JSON.stringify(arrayWithoutDeletedTask))
  setTaskList(arrayWithoutDeletedTask)
}

function setTaskDone(id) {
  const taskUpd = taskList.find(tarea => tarea.id === id);
  taskUpd.done = true;
  setTaskList([...taskList])
}

  return (
//Debe tener un div padre para que se pueda leer el hmtl o podemos dejar sin contenedor padre. Ej: return(<h1>Lista de tareas</h1>)

    <div className="p-4">
      <Titulo/>
      <Subtitulo/>
      <Container>
        <Row>
            {/* Columna de formulario  */}
          <Col xs={12} lg={6} className="bg-warning p-2 mb-2">
            <FormTareas agregarNuevaTareaDesdeHijo={addNewTask}    />
          </Col>
          <Col xs={12} lg={6} className="bg-info p-2">
            <TaskList listaTareas={taskList} deleteTaskAppJs={deleteTask} setTaskDone={setTaskDone} />
          </Col>
        </Row>
      </Container>

      

    </div>
  );
}

export default App;
