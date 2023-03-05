import React from 'react';
import IndividualMovie from './movies/IndividualMovie';
import './App.css';
import { movieDTO } from './movies/movies.model';

function App() {

  const testMovie: movieDTO = {
    id: 1,
    title: "Madame Monsieur",
    poster: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/W3HrhWazhO/image/MadameMonsieur1657351653514.jpg'
  }

  return (
    <>
      <IndividualMovie {...testMovie}/>
    </>
  );
}

export default App;
