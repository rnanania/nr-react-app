import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
    const boldStyle = {
      fontWeight: 500,
      fontStyle: 'italic'
    };

    const respStyle = {
      '@media (max-width: 768px)' : {
        width: '30%',
        minWidth: '350px'
      }
    };

    return  (
      <div className="Person" style={respStyle}>
        <p>I am <span style={boldStyle}>{props.name}</span> and my age is <span style={boldStyle}>{props.age}</span></p>
        <input type="text" value={props.name} onChange={props.onChange}/>
        {props.children}
        <i className="fas fa-minus-circle" onClick={props.click}></i>
      </div>
    );
};
export default Radium(Person);
