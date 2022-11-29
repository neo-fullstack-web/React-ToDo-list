import { faCheck, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'
                        // destructuro las props
export const TaskItem = ({tarea, deleteTask, setTaskDone}) => {
  return (
    <ListGroupItem className='d-flex'>
        {tarea.detail}
        <span className='ms-auto'>
            {tarea.done 
                ? <FontAwesomeIcon icon={faCheck} />        
                : <Button variant="success" onClick={() => setTaskDone(tarea.id)}>
                  <FontAwesomeIcon icon={faSquareCheck} /> 
                </Button>
            }
            <Button variant='danger' onClick={() => deleteTask(tarea.id)}>
              <FontAwesomeIcon icon={faTrash} /> 
            </Button>
        </span>
      </ListGroupItem>
  )
}
