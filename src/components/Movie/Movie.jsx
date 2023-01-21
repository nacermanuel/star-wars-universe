import React from 'react'
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Movie() {
    const [ data, setData] = useState({})

    let { id } = useParams()
  

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=94cd0919045936987eb36de68d9b0242`)
        .then(response => response.json())
        .then(resp => {
            setData(resp)
            
        })
    },[])

    console.log(data, ' hola ' , id)
    

  return (
    <>
        <div>Movie</div>
    </>
  )
}
