import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Home.css'
import { Link } from 'react-router-dom'


export default function Home() {

  return (
   <>
    <NavBar/>
    <div className='contenedorPrincipal'>
        <div className="tituloHome">Choose Your Star Wars Favorite Movie</div>
        <div className="seleccionEpisodio">
            <Link to='/movie/1893'>
                <img src="https://image.tmdb.org/t/p/original/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg" alt="posterEpisodio1" />
            </Link>
            <img src="https://image.tmdb.org/t/p/original/oZNPzxqM2s5DyVWab09NTQScDQt.jpg" alt="posterEpisodio2" />
            <img src="https://image.tmdb.org/t/p/original/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg" alt="posterEpisodio3" />
            <img src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" alt="posterEpisodio4" />
            <img src="https://image.tmdb.org/t/p/original/2l05cFWJacyIsTpsqSgH0wQXe4V.jpg" alt="posterEpisodio5" />
            <img src="https://image.tmdb.org/t/p/original/q6ydU8r1iYyy2bV7tPVaq266Y1k.jpg" alt="posterEpisodio6" />
            <img src="https://image.tmdb.org/t/p/original/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg" alt="posterEpisodio7" />
            <img src="https://image.tmdb.org/t/p/original/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg" alt="posterEpisodio8" />
            <img src="https://image.tmdb.org/t/p/original/db32LaOibwEliAmSL2jjDF6oDdj.jpg" alt="posterEpisodio9" />
            <img src="https://image.tmdb.org/t/p/original/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg" alt="posterRogue" />
            <img src="https://image.tmdb.org/t/p/original/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg" alt="posterSolo" />
            <img src="https://image.tmdb.org/t/p/original/wn6LkWQst96dPGEkn8Cl2TnNnLp.jpg" alt="posterObiwan" />


        </div>
    </div>
   </>
  )
}
