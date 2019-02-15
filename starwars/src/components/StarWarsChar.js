import React from 'react';
import './StarWars.scss';

const StarWarsChar = (props) => {
    return (
        <div className="char-box">
            <h2>{props.obj.name}</h2>
           <div className="p-line"><p><strong>DOB:</strong></p><p>{props.obj.birth_year}</p></div>
            <div className="p-line"><p><strong>Eyes Color:</strong></p><p>{props.obj.eye_color}</p></div>
            <div className="p-line"><p><strong>Hair Color:</strong></p><p>{props.obj.hair_color}</p></div>
            <div className="p-line"><p><strong>Skin Color:</strong></p><p>{props.obj.skin_color}</p></div>
            <div className="p-line"><p><strong>Gender:</strong></p><p>{props.obj.gender}</p></div>
            <div className="p-line"><p><strong>Height:</strong></p><p>{props.obj.height}</p></div>
            <div className="p-line"><p><strong>Mass:</strong></p><p>{props.obj.mass}</p></div>
        </div>
    )
}


export default StarWarsChar;
