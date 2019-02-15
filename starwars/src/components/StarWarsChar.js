import React from 'react';
import './StarWars.scss';

const StarWarsChar = (props) => {
    return (
        <div className="char-box">
            <div>{props.obj.name}</div>
            <div>{props.obj.birth_year}</div>
            <div>{props.obj.eye_color}</div>
            <div>{props.obj.hair_color}</div>
            <div>{props.obj.skin_color}</div>
            <div>{props.obj.gender}</div>
            <div>{props.obj.height}</div>
            <div>{props.obj.mass}</div>
        </div>
    )
}


export default StarWarsChar;
