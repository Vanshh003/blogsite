import { useEffect, useState ,} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './Appwrite/Auth'
import { logout ,login} from './Store/authSlice'
import { Footer, Header } from './Components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen w-full flex flex-wrap content-between border border-yellow-400 bg-gray-700'>
      <div className='w-full block'>
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
      </div>
    </div>
  ) : null
}

export default App
