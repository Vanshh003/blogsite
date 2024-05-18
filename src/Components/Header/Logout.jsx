import React from 'react'
import authService from '../../Appwrite/Auth'
import { logout } from '../../Store/authSlice'
import { useDispatch } from 'react-redux'



function Logout() {
    const dispatch = useDispatch()
    const logOutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout()); 
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 text-white hover:bg-black rounded-full' onClick={logOutHandler}>
        LOGOUT
    </button>
  )
}

export default Logout
