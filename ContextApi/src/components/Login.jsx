import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../Contexts/UserContext'

const Login = () => {
    const { user,setUser } = useContext(UserContext) ;

    const [name,setName] =useState("")
    const [password,setPassword] =useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(name,password)
        setUser({name,password})
        setName("")
        setPassword("")
        
    }
  return (
   <>
   <form onSubmit={handleSubmit}>
    <input type="text" 
     value={name}

       placeholder='Enter your name' 
    onChange={(e)=>{
        setName(e.target.value)
    }} /> <br />
    <input type="password" 
    value={password}
    placeholder='Enter your password'
    onChange={(e)=>{
        setPassword(e.target.value)
    }} /> <br />
    <button >login</button> 
   </form>
<h1>user:{user.name}</h1>
   
   </>
  )
}

export default Login