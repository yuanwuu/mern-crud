const getPosts = async() =>{
    const res = await fetch('/api/post')
    const data = await res.json()

    if(!res.ok){
        throw Error(data.error)
    }

    return data
}

export default getPosts