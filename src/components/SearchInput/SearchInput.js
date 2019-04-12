import React from 'react';
import styles from './SearchInput.module.scss';
import Input from './Input';
import Submit from './Submit';

const SearchInput = ({ type }) => (
    <form className={styles.wrapper}>
        <Input name={type}/>
        <Submit name={type}/>
    </form>
);

export default SearchInput;