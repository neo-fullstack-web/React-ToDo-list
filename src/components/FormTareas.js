import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormTareas = (props) => {

  function cargarTarea(e) {
    e.preventDefault();
    console.log(e.target.elements.taskDetail);


    const newTask = {
      id: Date.now(),
      detail: e.target.elements.taskDetail.value,
      done: false
    }

    props.agregarNuevaTareaDesdeHijo(newTask)
  }

  return (
    <div>
            <Form onSubmit={cargarTarea}>
              <Form.Group className="mb-3" controlId="taskDetail">
                <Form.Label>Ingrese tarea a realizar</Form.Label>
                <Form.Control type="text" placeholder="Detalle de la tarea" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Agregar
              </Button>
            </Form>
    </div>
  );
};

export default FormTareas;
