import React from 'react'
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Movie.css'

export default function Movie() {
    const [ data, setData] = useState({})

    let { id } = useParams()
  

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=94cd0919045936987eb36de68d9b0242`)
        .then(response => response.json())
        .then(resp => {
            setData(resp)
        })
        // eslint-disable-next-line
    },[])

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    
  return (
    <>
        <h1>{data.original_title}</h1>
        <div className="main">
          <div className="imagen">
            <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
          </div>
          <div className="texto">
            <h2>Release Date: {data.release_date}</h2>
            <h2>Budget: {formatter.format(data.budget)}</h2>
            <h2>Revenue: {formatter.format(data.revenue)}</h2>

            <h2>Overview:</h2>
            <p className='overView'>{data.overview}</p>
          </div>
        </div>
        <h2>Main Characters:</h2>
       
    </>
  )
}
