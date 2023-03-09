import React, {useState, useEffect} from 'react';
import MoviesList from "../movies/MoviesList"
import { movieDTO, landingPageDTO } from '../movies/movies.model';



function LandingPage() {

    const [movies, setMovies] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
          setMovies({
            inTheaters: [
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
            }
          ],
          upcomingReleases: [
              {
                id: 5,
                title: "Madame Monsieur",
                poster: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/W3HrhWazhO/image/MadameMonsieur1657351653514.jpg'
              },
            ]
          })
        }, 3000);
    
        return () => clearTimeout(timerId);
      });
    
    
      return(


        <div>
            <h3>testing Text</h3>
            <h3>In Theather</h3>
            <MoviesList movies={movies.inTheaters}/>
            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases}/>
        </div>
           
      )
}

export default LandingPage
