import React from 'react'
import { NavLink } from 'react-router-dom'
const user = {
  name: 'Pepito Gomez',
  role: 'USER_ROLE'
}
export const Sidebar = () => {
  return (
    <>
      <ul className="list-group main-sidebar">
        
          <NavLink to="/" className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
            Home
          </NavLink>

          <NavLink to="/todo-list" className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
            Lista Tareas
          </NavLink>
          

          <NavLink to="/contact" className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
            Contacto
          </NavLink>


          <NavLink to="/about" className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
            Acerca de nosotros
          </NavLink>

          <NavLink to="/product-admin" className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
            Administrar Productos
          </NavLink>


      </ul>
    
    </>
  )
}
