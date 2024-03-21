import React, { createContext, useState } from 'react'

// create post global state
export const PostContext = createContext()

const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([])

  return (
    <PostContext.Provider value={{posts,setPosts}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider