import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FormTareas from '../../components/FormTareas'
import Subtitulo from '../../components/Subtitulo'
import { TaskList } from '../../components/TaskList/TaskList'
import Titulo from '../../components/Titulo'
import { useAuth } from '../../context/AuthContext'

const taskListConst = JSON.parse(localStorage.getItem('tasks')) || [];


export const ToDoList = () => {
  const auth = useAuth()

  const [taskList, setTaskList] = useState(taskListConst);
  auth.login()
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
    <div className="p-4">
      {auth.user.name}
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
  )
}
