import React from 'react'
import LogoIMG from '../../public/assets/logo4.png'


function Logo({width = '100px'}) {
  console.log(width);
  
  return (
    <div className={`${width} border m-0 p-0`} >
      <img src={LogoIMG} alt="logo"  className={` w-full h-full `} />
    </div>
  )
}

export default Logo