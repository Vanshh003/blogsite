import React from 'react'
import logo from "../assets/images/bird.png"


function Logo({width = '70px',height='70px'}) {
  return (
    <img src={logo} alt="LOGO" height={height} width={width}/>
  )
}

export default Logo
