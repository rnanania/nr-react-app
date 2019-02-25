import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './person.css';

const person = (props) => {
    // Classe based component can be done using React.createRef() instead of useRef().
    const inputElementRef = useRef(null);

    // Effect to run first time compoennt mount.
    useEffect(() => {
        console.info('One Time useEffect: ' + props.name);
        inputElementRef.current.focus();
        // Clean up to run before component unmount.
        return () => {
            console.info('One Time useEffect cleanup: ' + props.name);
        };
    }, []);

    // Effect to run on specific property change of props.
    useEffect(() => {
        console.info('Name change useEffect: ' + props.name);
        // Clean up to run before specific property change apply.
        return () => {
            console.info('Name change useEffect cleanup: ' + props.name);
        };
    }, [props.name, props.age]);

    // Effect to run on every change.
    useEffect(() => {
        console.info('Everytime useEffect: ' + props.name);
        // Clean up to run before any change or update apply to component.
        return () => {
            console.info('Everytime useEffect cleanup: ' + props.name);
        };
    });

    return (
    <div className="Person">
        <input 
            ref={inputElementRef}
            type="text" 
            value={props.name} 
            onChange={props.nameChange}/>
        <p>I am {props.name} and {props.age} years old</p>
        <p>{props.children}</p>
        <FontAwesomeIcon className="delete-person" icon="trash" size="lg" title="remove" onClick={props.remove}/>
    </div>
    );
};

person.propTypes = {
    name: PropTypes.string, 
    age: PropTypes.number,
    nameChange: PropTypes.func,
    remove: PropTypes.func
};

export default person;
