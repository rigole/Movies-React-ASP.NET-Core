import { actorMovieDTO } from "../actors/actors.model";
import { Typeahead } from "react-bootstrap-typeahead";

function TypeAheadActors(props: typeAheadActorsProps){
     const actors: actorMovieDTO[] = [{
        id:1, name: 'Kepombia', character: '', picture: ''
     },
     { 
        id:2, name: 'Poulibe', character: '', picture: ''
     },
     {
        id:3, name: 'Mbarga', character: '', picture: ''
     }]

     return(
        <>
        <label htmlFor="">{props.displayName}</label>
        <Typeahead
            id="typehead"
            onChange={actor => {
                console.log(actor)
            }}

            options={actors}
            labelKey={actor => actor.charAt}
            filterBy={['name']}
            placeholder="Write the name of the actor..."
            minLength={1}
        />
    </>
     )
    
}

export default TypeAheadActors

interface typeAheadActorsProps {

    displayName: string;
    actors: actorMovieDTO[];
}