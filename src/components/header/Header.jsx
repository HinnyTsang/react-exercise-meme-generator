import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header--container'>
        <div className='header--logo'>
            <img src="/images/troll_face.png"/>
            <h1>Meme Generator</h1>
        </div>
        <h2 className='header--description'>
            React Course - Project 3
        </h2>
    </div>
  )
}

export default Header