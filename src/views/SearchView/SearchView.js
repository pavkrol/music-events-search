import React from 'react';
import styles from './SearchView.module.scss';
import Logo from '../../components/Logo/Logo';
import Popup from '../../components/Popup/Popup';
import { CSSTransition } from 'react-transition-group';
import SearchInput from '../../components/SearchInput/SearchInput';
import ResultsList from '../../components/ResultsList/ResultsList';
import AppContext from '../../context';

class SearchView extends React.Component {
  state = {
    searchResults: [],
    popupOpen: false,
    eventResults: [],
  };

  addItem = (item) => {
    this.setState({
      searchResults: item,
    });
  }

  openPopup = () => {
    this.setState({
      popupOpen: true,
    });
  }

  closePopup = () => {
    this.setState({
      popupOpen: false,
    });
  }

  searchEvent = (artist_name) => {
    const API_KEY = "Dx2IcBYjQ1R9rA7e";
    fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${API_KEY}&artist_name=${artist_name}`)
    .then(resp => resp.json())
    .then(resp => {
      if(resp.resultsPage.totalEntries) {
        const events_list = resp.resultsPage.results.event.map(
          event => {
            return {
              id: event.id,
              artist: artist_name,
              name: event.displayName,
              date: event.start.date,
              city: event.location.city,
              venue: event.venue.displayName,
              tickets_link: event.uri,
            }
          });
        this.setState({
          eventResults: events_list,
        })
      }
    });
  }

  render() {
    const { popupOpen } = this.state;

    const contextElements = {
      ...this.state,
      addItem: this.addItem,
      openPopup: this.openPopup,
      closePopup: this.closePopup,
      searchEvent: this.searchEvent,
    }

    return(
      <AppContext.Provider value={contextElements}>
        <section className={styles.wrapper}>
          <header className={styles.header}>
            <Logo secondary>eventify</Logo>
            <SearchInput type="search-artist"></SearchInput>
            <SearchInput type="search-city"></SearchInput>
          </header>
          <div className={styles.results}>
            <ResultsList items={this.state.eventResults}/>
          </div>
        </section>
        <CSSTransition
          in={popupOpen}
          timeout={300}
          classNames={{ ...styles }}
          unmountOnExit
        >
          <>
          { popupOpen && <Popup items={this.state.searchResults}/> }
          </>
        </CSSTransition>
      </AppContext.Provider>
    )
  }
}

export default SearchView;