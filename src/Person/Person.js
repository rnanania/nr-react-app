import React from 'react';
import styles from './Person.css';

const Person = (props) => {
    return  (
      <div className={styles.Person}>
        <p>I am <span className={styles.highlight}>{props.name}</span> and my age is <span className={styles.highlight}>{props.age}</span></p>
        <input type="text" value={props.name} onChange={props.onChange}/>
        {props.children}
        <i className="fas fa-minus-circle" onClick={props.click}></i>
      </div>
    );
};
export default Person;
