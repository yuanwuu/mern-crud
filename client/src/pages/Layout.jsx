import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <header className='bg-indigo-500 text-white'>
            <nav className='flex items-center justify-between p-4 '>
                <Link to='/' className="fa-solid fa-house nav-link"></Link>

                <div className='flex items-center gap-2 '>
                <Link to='/login' title="login" className="fa-solid fa-right-to-bracket nav-link"></Link>
                <Link to='/register' title="register" className="fa-solid fa-user-plus nav-link"></Link>
                </div>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Layout