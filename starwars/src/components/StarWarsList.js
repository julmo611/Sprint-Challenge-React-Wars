import React from 'react';
import './StarWars.scss';

import StarWarsChar from './StarWarsChar';


const StarWarsList = (props) => {
    
    return (
        <div className="cards-block">
            {props.value.map(character => <StarWarsChar obj={character} key={character.created} />) }
        </div>
    );
}


export default StarWarsList;