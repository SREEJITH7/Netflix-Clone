import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {useState, useEffect, useRef } from 'react';

import {Link} from 'react-router-dom'



const TitleCards = ({title, category}) => {

const [apiData, setApiData] = useState([]);
const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y2NjYxZDBiNjc2NjgxYTg3NzMxZDI1MmRjZmQ5MCIsIm5iZiI6MTc0NTI1NTUxMy41NTUsInN1YiI6IjY4MDY3YzU5NmUxYTc2OWU4MWVlNWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._dbcKh-kzaDZbVLkZwWvJgUtjeJ7Z1Ba4mwG_k1yw3U'
  }
};



const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{


  fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)

  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel' , handleWheel);
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popoular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/Player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="card-image"  />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards