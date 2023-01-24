import React from 'react'
import './ModalChoose.css'

export default function ModalChoose(props) {
  
    //Este UseEffect bloqueara la opcion de scroll al abril el Modal y la reactivara al cerrar con el cleanup function.
    React.useEffect(()=>{
        document.body.style.overflow = 'hidden'

        return () => { document.body.style.overflow = 'visible' }
    },[])
  
    return (
    <div className='chooseWindow'>
        ModalChoose 
        <button onClick={()=> props.cerrar(false)}>X</button>
    </div>
  )
}
