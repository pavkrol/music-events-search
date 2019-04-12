import React from 'react';
import styles from './SearchView.module.scss';
import Logo from '../../components/Logo/Logo';
import SearchInput from '../../components/SearchInput/SearchInput';

const SearchView = () => (
  <section className={styles.wrapper}>
      <header className={styles.header}>
        <Logo secondary>eventify</Logo>
        <SearchInput type="search-artist"></SearchInput>
        <SearchInput type="search-city"></SearchInput>
      </header>  
  </section>
);

export default SearchView;