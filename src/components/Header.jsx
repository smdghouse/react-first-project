import React from 'react'
import {HashLink} from 'react-router-hash-link'

function Header() {
  return (
    <nav className='mynav'>
      <h1>Ghouse</h1>
      <main>
        <HashLink to={'/'}>Home</HashLink>        
        <HashLink to={'/contact'}>contact</HashLink>        
        <HashLink to={'/#about'}>about</HashLink>        
        <HashLink to={'/#brands'}>Brands</HashLink>        
        <HashLink to={'/service'}>service</HashLink>        

      </main>
    </nav>
  )
}

export default Header