import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'

export const Login = () => {
    const auth = useAuth();
    const {register, handleSubmit, watch, formState: { errors }} = useForm();

    async function miFnLogin(data) {
        try {

           auth.login(data)


        } catch (error) {
            console.log(error)
        }

        

        
    }

    // // Manejo de data en el formulario con hook ref de react
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    async function login(evt) {
        evt.preventDefault();
        console.log(`Login llamado`, 
                    emailInput.current.value, 
                    passwordInput.current.value)
    }

  return (
    <div>
        <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 4 }}>
                
                <form onSubmit={handleSubmit(miFnLogin)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email", {required: true, maxLength: 30})}></input>
                    {errors.email && <p>Error en el email</p>}
                    <label htmlFor="password">Constraseña</label>
                    <input type="password" {...register("password", { required: true })}></input>
                    {errors.password?.required && <p>El password es obligatorio</p>}
                    <input type="submit" />
                </form>
                
                
                
                
                
                
                
                
                
                
                
                {
                // *** Manejo de data en el formulario con hook ref de react
                 <Form onSubmit={login}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={emailInput} name='email' type='email' placeholder='user@email.com'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordInput} name='password' type='password'></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ingresar
                    </Button>
                </Form>}
                
                
                


            </Col>

        </Row>
        


    </div>
  )
}
