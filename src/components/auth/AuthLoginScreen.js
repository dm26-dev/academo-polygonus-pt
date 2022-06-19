import React, { useContext } from 'react'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { Redirect } from 'react-router-dom'

import { AuthContext } from './AuthContext'

import { types } from '../../types/types'
import { useForm } from '../../hooks/useForm'
import { userTest } from '../../helpers/userTest'

export const AuthLoginScreen = ({ history }) => {

    const { values, handleInputChange } = useForm({ userName: '', password: '' })

    const { stateUser, dispatch } = useContext(AuthContext)

    const { userName, password } = values

    const handleClick = (e) => {

        e.preventDefault()


        if (userName === userTest.name && password === userTest.password) {

            const user = {
                type: types.login,
                payload: { name: userName }
            }

            dispatch(user)

            history.replace('/home')

        } else {

            Swal.fire({
                icon: 'error',
                text: 'Usuario o clave incorrectos',
                showCloseButton: false,
                showCancelButton: false,
                showConfirmButton: false,
            })

        }


    }

    if (stateUser.logged === true) {
        return <Redirect to="/home" />
    }

    return (
        <div className="container-login">

            <h1 className="container-login__title">Academo</h1>

            <form onSubmit={handleClick} className="card-login">

                <label className="card-login__label" htmlFor="userName" >Username</label>

                <input
                    autoComplete="off"
                    className="card-login__input"
                    id="userName"
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    value={userName}
                />

                <label className="card-login__label" htmlFor="password">Password</label>

                <input
                    autoComplete="off"
                    className="card-login__input"
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    value={password}
                />

                <br />

                <button className="btn btn-primary btn-block" > Ingresar</button>

            </form>




        </div>
    )
}
