import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Person.css';

const person = (props) => {
    return (
    <div className="Person">
        <input type="text" value={props.name} onChange={props.nameChange}/>
        <p>I am {props.name} and {props.age} years old</p>
        <p>{props.children}</p>
        <FontAwesomeIcon className="delete-person" icon="times-circle" size="lg" onClick={props.remove}/>
    </div>
    );
};

export default person;
