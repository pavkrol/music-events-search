import React from 'react';
import styles from './SearchView.module.scss';
import Logo from '../../components/Logo/Logo';
import SearchInput from '../../components/SearchInput/SearchInput';
import ResultsList from '../../components/ResultsList/ResultsList';

class SearchView extends React.Component {
  state = {
    searchResults: []
  };

  render() {
    return(
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <Logo secondary>eventify</Logo>
          <SearchInput type="search-artist"></SearchInput>
          <SearchInput type="search-city"></SearchInput>
        </header>
        <div className={styles.results}>
          {
            this.state.searchResults.length > 0 ?
            (
              <ResultsList items={this.state.searchResults}/>
            ):(
              <p>There's nothing to show. Please, search for an artist or city to display concerts...</p>
            )
            
          }
        </div>
      </section>
    )
  }
}

export default SearchView;