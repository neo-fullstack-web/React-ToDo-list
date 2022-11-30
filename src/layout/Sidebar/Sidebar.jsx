import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <>
      <ul class="list-group main-sidebar">
        
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


      </ul>
    
    </>
  )
}
