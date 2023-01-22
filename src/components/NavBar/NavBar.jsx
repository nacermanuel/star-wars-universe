import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from './img/SWLOGO2.png'

export default function NavBar() {
  return (
    <>
        <nav className='nav'>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
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
