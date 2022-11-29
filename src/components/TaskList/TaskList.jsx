
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { TaskItem } from '../TaskItem/TaskItem'

export const TaskList = (props) => {
    console.log(props.listaTareas)
  return (
    <div>
        <h1>LISTA DE TAREAS</h1>
        Componente que va a pintar la lista de tareas
        TaskList
        <ListGroup>
        
            {
                props.listaTareas.map((tareaMap, index) => {
                    return (
                        <TaskItem tarea={tareaMap} key={tareaMap.id} deleteTask={props.deleteTaskAppJs} setTaskDone={props.setTaskDone}/>
                    )
            })}

        </ListGroup>


    </div>
  )
}
