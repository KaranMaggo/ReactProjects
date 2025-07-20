import React from 'react'
import { useContext } from 'react'
import UserContext from '../Contexts/UserContext'

const HomePage = () => {
  const{user}=useContext(UserContext)
  return (
    <>
    <h1>User:{user.name}</h1>
    </>
  )
}

export default HomePage