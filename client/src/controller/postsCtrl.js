const getPosts = async() =>{
    const res = await fetch('/api/post')
    const data = await res.json()

    if(!res.ok){
        throw Error(data.error)
    }

    return data
}


// get user posts
const getUserPosts = async () =>{
    // authorized the user & fetch data
    const res = await fetch('/api/post/user',{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem('token')}` 
        }
    })
    const data = await res.json()
    
    if(!res.ok){
        throw Error(data.error)
    }

    return data

}




export default { getPosts, getUserPosts }