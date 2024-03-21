// ----------------------------- LOGIN ----------------------------------
export const loginUser = async (email,password) => {
    if(!email || !password){
        throw Error('all fields are mandatory!')
    }

    const res = await fetch('/api/user/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email,password})
    })

    const data = await res.json()

    if(!res.ok){
        throw Error(data.error)
        // throw Error('error msg from userCtrl.js')
    }
    localStorage.setItem('token',data.token)
    localStorage.setItem('email',data.email)
    return data
}

// ----------------------------- REGISTER ----------------------------------
export const registerUser = async(email,password,passwordCfm) =>{
    if(!email || !password || !passwordCfm){
        throw Error('all fields are mandatory!')
    }
    if(password !== passwordCfm){
        throw Error('password dont match')
    }
    
    const res = await fetch('/api/user/signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email,password})
    })
    
    const data = await res.json()
    
    if(!res.ok){
        throw Error(data.error)
    }
    localStorage.setItem('token',data.token)
    localStorage.setItem('email',data.email)
    return data
}



export default {loginUser, registerUser}