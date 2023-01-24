import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { dataMovie } from '../../db'
import ModalChoose from '../ModalChoose/ModalChoose'
import ReactDOM from 'react-dom'


export default function Home() {

  const [popupvote, setPopupvote] = React.useState(false)
  
  return (
  <>
    <div className='contenedorPrincipal'>
        <h2 className='escoge'>Choose Your Star Wars Favorite Movie and Give It A Vote!!</h2>
        <div className="seleccionEpisodio">
            {
              dataMovie.map((e,i)=> 
                
                <div className='portadasPelis'>
                  <Link to={`/movie/${e.id}`}>
                    <img src={e.poster} alt={e.id}/>
                  </Link>
                  <div className="divBotones">
                    <span class="dot">{e.votes}</span>
                    <button className='botonScore' onClick={() => setPopupvote(!popupvote)}> VOTE </button>
                  </div>
                </div>
              
              )
            }
        </div>
    </div>
    { popupvote && ReactDOM.createPortal( <ModalChoose cerrar={setPopupvote}/> , document.getElementById('portal') )
    }
    
    </>
  )
}
