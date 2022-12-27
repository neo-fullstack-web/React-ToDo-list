import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const URL = `http://localhost:3000`;
const token = JSON.parse(localStorage.getItem('token'))

export const Home = () => {

  const [users, setUsers] = useState([]);
  // const [usersFiltered, setUserFiltered] = useState([]);

  useEffect(() => {
    obtenerUsuarios();
    // buscarUsuario('')
  }, [])

 async function obtenerUsuarios() {
  try {
    const usersDB = await axios.get(`${URL}/users`, {
      headers: {
        authorization: token
      }
    });
    console.log(usersDB.data);
    setUsers(usersDB.data)
  } catch (error) {
    console.log(error.response)
  }

    // fetch(`${URL}/users`)
    //           .then(resp => resp.json())
    //           .then(respuesta => {
    //             console.log(respuesta);
    //             setUsers(respuesta)
    //           })
    //           .catch(error => console.log(error))
  }

  function borrarUsuarioDesdeFront(id) {
    console.log(`Vamos a borrar el usuario con el ID: ${id}`);
    axios.delete(`http://localhost:3000/users/${id}`).then(resp => {
      
      console.log(resp)
      obtenerUsuarios()
    });
    
  }

  // async function buscarUsuario(nombre) {
  //   try {
  //     console.log(`Valor del input:`,  nombre)
  //     const users = await axios.get(`http://localhost:3000/users-filter?name=${nombre}`)
  //     setUsers(users.data)
  //     // setUserFiltered(users.data);
  //   } catch (error) {
      
  //   }
  // }

  return (
    <div>
      <h1>Usuarios:</h1>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Buscar Usuario</Form.Label>
          <Form.Control type="text" placeholder="ingrese nombre" onKeyUp={(evt) => buscarUsuario(evt.target.value)}/>
        </Form.Group>
      </Form> */}

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
