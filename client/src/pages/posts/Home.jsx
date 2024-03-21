import React,{useEffect} from 'react'
import getPosts from '../../controller/postsCtrl'

const Home = () => {

    useEffect(() =>{
        setTimeout(async()=>{
            const data = await getPosts()
            console.log(data)
        },500)
    },[])

  return (
    <section className='card'>
        <h1 className='title'>Latest posts</h1>
        <div>posts</div>
    </section>
  )
}

export default Home