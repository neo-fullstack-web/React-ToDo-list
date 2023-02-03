import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';
import { Carousel } from './Carousel/Carousel';
import { useAuth } from '../../context/AuthContext';


export const Home = () => {
  const auth = useAuth()
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState([]);
  let active = 1;

  useEffect(() => {
    obtenerUsuarios();
    // buscarUsuario('')
  }, [])

 async function obtenerUsuarios(page = 0) {
  console.log(process.env.REACT_APP_URL)
  try {
    active = page
    const usersDB = await axios.get(`${process.env.REACT_APP_URL}/users?page=${page}`, {
      headers: {
        authorization: auth.token
      }
    });
    const totalUsers = usersDB.data.total;
    const totalPages = Math.ceil(totalUsers / 3);
    console.log(usersDB.data);
    
    const pagesBtns = [];
    for(let i = 0; i < totalPages; i++) {
      pagesBtns.push(
        <Pagination.Item key={i} active={i === active} onClick={() => obtenerUsuarios(i)}>
          { i + 1 }
        </Pagination.Item>
      )
    }
    
    setUsers(usersDB.data.users);
    setPages(pagesBtns)



  } catch (error) {
    console.log(error)
    // alert(`Se necesita un token válido`)
    // window.location.href = '/login'
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
    axios.delete(`${process.env.REACT_APP_URL}/users/${id}`).then(resp => {
      
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
      <Pagination className='mt-3'>{pages}</Pagination>
      <Carousel></Carousel>
    </div>
  )
}
