import React,{useState,useContext} from 'react'
import Alert from '../../components/Alert'
import { registerUser } from '../../controller/userCtrl'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    //use UserContext
    const { setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const [error,setError] = useState(null)

    //form data state
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordCfm,setPasswordCfm] = useState('')


    //handle register
    const handleRegister = async(e)=>{
        e.preventDefault()
        try {
            // register a user
            await registerUser(email,password,passwordCfm)

             // update the user
             setUser({email,posts:[]})

             // navigate to dashboard
            navigate('/dashboard')

        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <section className='card'>
        <h1 className='title'>Register</h1>

        <form onSubmit={handleRegister}>
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

            <input 
            type="password" 
            placeholder='Confirm Password' 
            className='input'  
            value={passwordCfm}
            onChange={(e)=>setPasswordCfm(e.target.value)} />


            <button className='btn'>Register</button>
        </form>

            {error && (<Alert msg={error} />)}
        

    </section>
  )
}

export default Register