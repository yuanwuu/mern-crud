import React, { useContext, useState } from 'react'
import Alert from '../../components/Alert'
import {loginUser} from '../../controller/userCtrl.js'
import { UserContext } from '../../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    //use UserContext
    const { setUser} = useContext(UserContext)
    
    const navigate = useNavigate()

    const [error,setError] = useState(null)

    //form data state
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    //handle login
    const handleLogin = async(e)=>{
        e.preventDefault()

        try {
            //login the user
            await loginUser(email,password)

            // update the user
            setUser({email,posts:[]})

            // navigate to dashboard
            navigate('/dashboard')
        } catch (error) {
            // setError(error.message)
            setError('error msg from login.jsx')
        }
    }

  return (
    <section className='card'>
        <h1 className='title'>Login to your account</h1>

        <form onSubmit={handleLogin}>
            <input 
            type="email" 
            placeholder='Email Address' 
            className='input' 
            autoFocus
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />

            <input 
            type="password" 
            placeholder='Password' 
            className='input'  
            value={password}
            onChange={(e)=>setPassword(e.target.value)} />


            <button className='btn'>Login</button>
        </form>

        {error && <Alert msg={error}/>}

    </section>
  )
}

export default Login