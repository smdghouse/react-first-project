import {AiFillYoutube,AiFillInstagram,AiFillTwitterCircle , AiFillFacebook} from 'react-icons/ai'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div>
            <h1>Ghousetech</h1>
            <p>all right are resereved</p>
        </div>
        <div>
            <h1>follow us:</h1>
            <div className='logos'>
                <AiFillYoutube />
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillTwitterCircle />
            </div>
        </div>
    </div>
  )
}

export default Footer