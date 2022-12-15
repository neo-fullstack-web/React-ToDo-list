import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const URL = `http://localhost:3000`;

export const Home = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    llamarServidor();
  }, [])

  function llamarServidor() {
    fetch(`${URL}/users`).then(resp => resp.json())
              .then(respuesta => {
                console.log(respuesta);
                setUsers(respuesta)
              })
  }

  function borrarUsuarioDesdeFront(id) {
    console.log(`Vamos a borrar el usuario con el ID: ${id}`);
    axios.delete(`http://localhost:3000/users/${id}`).then(resp => {
      
      console.log(resp)
      llamarServidor()
    });
    
  }

  return (
    <div>
      <h1>Usuarios:</h1>
      {
        users.map(usr => (
            <div key={usr._id}>
              {usr.name} | {usr.email}
              <button onClick={() => borrarUsuarioDesdeFront(usr._id)}>DELETE</button>
            </div>
          )
        )
      }
    </div>
  )
}
