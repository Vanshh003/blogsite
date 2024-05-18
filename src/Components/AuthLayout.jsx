import React , {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({children,authentication= true}) {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector((state)=> state.auth.status)

    useEffect(() => {
        // if(authStatus===true){
        //     navigate("/")
        // }
        // else if(authStatus===false){
        //     navigate("/login")
        // }

        

        if(authentication && authStatus !==authentication){
            navigate("/login")
            //navigate("/login"): If the route/component requires authentication (authentication is true) 
        //but the user is not authenticated (authStatus is not equal to authentication), 
        //it redirects the user to the login page (/login).
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
            //navigate("/"): If the route/component does not require authentication (authentication is false) 
            //but the user is somehow authenticated (authStatus is not equal to authentication), 
            //it redirects the user to the home page (/).
        }
        setLoader(false);
      
    
      
    }, [authStatus,navigate,authentication])
    
  return loader ? <h1>Loading.... </h1> : <>${children}</>
}

