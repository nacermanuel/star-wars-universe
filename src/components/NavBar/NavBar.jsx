import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
        <nav className='nav'>
            <p>LOGO</p>
            <ul>
                <li>
                    <a href="/">Uno</a>
                </li>
                <li>
                    <a href="/">Dos</a>
                </li>
            </ul>
        </nav>
    </>
  )
}
