import React,{useContext, useEffect,useState} from 'react'
import getPosts from '../../controller/postsCtrl'
import {PostContext} from '../../context/PostContext'
import Post from '../../components/Post'

const Home = () => {

  const {posts,setPosts} = useContext(PostContext)

  //loading state
  const [loading, setLoading] = useState(true)

    useEffect(() =>{ 
        setTimeout(async()=>{
          // get all posts
            const data = await getPosts()

          //update posts state
            setPosts(data.posts)

          // not loading 
            setLoading(false)
        },1000)
    },[])

    console.log(posts)
  return (
    <section className='card'>
        <h1 className='title'>Latest posts</h1>

        {loading && (<i className='fa-solid fa-spinner animate-spin text-4xl block text-center' />)}
        
        {
          posts && posts.map((post)=>(
            <div key={post._id}>
              <Post post={post} />
            </div>
          ))
        }
    </section>
  )
}

export default Home