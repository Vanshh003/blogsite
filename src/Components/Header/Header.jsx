import React from 'react'
import {Container,Logout,Logo} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const checkUser = useSelector((state) => state.auth.status)
  const navigate = useNavigate();
  const navItems = [
    {
      name:"HOME",
      slug:'/',
      active:true
    },
    {
      name:"LOGIN",
      slug:'/login',
      active: !checkUser
    },
    {
      name:"SIGNUP",
      slug:'/signup',
      active: !checkUser
    },
    {
      name:"ALLPOSTS",
      slug:'/all-posts',
      active: checkUser
    },
    {
      name:"ADDPOST",
      slug:'/addpost',
      active: checkUser
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-700 border border-white justify-content-center' >
      <Container>
        <nav className='flex'>
          <div className='mr-6'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>item.active ? (
              <li key={item.name}>
                <button onClick={()=>navigate(item.slug)} 
                className='inline-block px-6 py-2 duration-200 justify-center items-center  text-white hover:bg-black rounded-full'>


                  {item.name}
                </button>
              </li>
            ) : null)}
            {checkUser && (
              <li>
                <Logout/>
              </li>
            )}
          </ul>
        </nav>

      </Container>
    </header>
  )
}

export default Header
