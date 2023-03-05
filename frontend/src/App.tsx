import React from 'react';
import IndividualMovie from './movies/IndividualMovie';
import './App.css';
import MoviesList from "./movies/MoviesList";
import { movieDTO } from './movies/movies.model';

function App() {

  const inTheaters: movieDTO[] = [
    {
    id: 1,
    title: "Madame Monsieur",
    poster: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/W3HrhWazhO/image/MadameMonsieur1657351653514.jpg'
  },
  {
    id: 2,
    title: "Madame Monsieur",
    poster: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/W3HrhWazhO/image/MadameMonsieur1657351653514.jpg'
  },
  {
    id: 3,
    title: "Madame Monsieur",
    poster: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/W3HrhWazhO/image/MadameMonsieur1657351653514.jpg'
  },
  {
    id: 4,
    title: "Madame Monsieur",
    poster: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/W3HrhWazhO/image/MadameMonsieur1657351653514.jpg'
  },
];

const UpcomingReleases: movieDTO[] = [
  {
    id: 5,
    title: "Madame Monsieur",
    poster: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/W3HrhWazhO/image/MadameMonsieur1657351653514.jpg'
  },
]

  return (
    <>
      <h3>In Theather</h3>
      <MoviesList movies={inTheaters}/>

      
      <h3>Upcoming Releases</h3>
      <MoviesList movies={UpcomingReleases}/>
    </>
  );
}

export default App;
