import React from 'react';
import styles from './Input.module.scss';

const Input = ({ name }) => (
    <input
        className={styles.input}
        id={name}
        type="text"
        name={name}
        placeholder={name==='search-artist' ? "Artist name..." : "City name..."}
    />
);

export default Input;