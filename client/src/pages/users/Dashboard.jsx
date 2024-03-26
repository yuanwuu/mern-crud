import React, { useEffect } from 'react'
import { getUserPosts } from '../../../../api/controllers/post.controller'

const Dashboard = () => {

  useEffect(()=>{
    setTimeout(async()=>{
      const data = await getUserPosts()
      console.log(data);
    },500)
  },[])

  return (
    <section className='card'>
      <h1 className='title'>User Dashboard</h1>
    </section>
  )
}


export default Dashboard