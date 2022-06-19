import React, { useReducer, useEffect } from 'react'

import { RouterApp } from './router/RouterApp'

import { AuthContext } from './components/auth/AuthContext'
import { authReducer } from './components/reducers/authReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const AcademoApp = () => {

  const [stateUser, dispatch] = useReducer(authReducer, {}, init)
  
  useEffect(() => {

    localStorage.setItem('user', JSON.stringify(stateUser))

  }, [stateUser])

  return (
    <AuthContext.Provider value={{ stateUser, dispatch }}>
      <RouterApp />
    </AuthContext.Provider>
  )
}

