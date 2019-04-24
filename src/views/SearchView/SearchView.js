import React from 'react';
import styles from './SearchView.module.scss';
import Logo from '../../components/Logo/Logo';
import SearchInput from '../../components/SearchInput/SearchInput';
import ResultsList from '../../components/ResultsList/ResultsList';
import AppContext from '../../context';

class SearchView extends React.Component {
  state = {
    searchResults: [],
  };

  addItem = (item) => {
    this.setState({
      searchResults: item,
    });
  }

  render() {

    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }

    return(
      <AppContext.Provider value={contextElements}>
        <section className={styles.wrapper}>
          <header className={styles.header}>
            <Logo secondary>eventify</Logo>
            <SearchInput type="search-artist" submitFn={this.searchArtist}></SearchInput>
            <SearchInput type="search-city"></SearchInput>
          </header>
          <div className={styles.results}>
            <ResultsList items={this.state.searchResults}/>
          </div>
        </section>
      </AppContext.Provider>
    )
  }
}

export default SearchView;