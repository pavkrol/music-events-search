import React from "react";
import styles from "./SearchInput.module.scss";
import Submit from "./Submit";
import AppContext from "../../context";

class SearchInput extends React.Component {
  state = {
    query: ""
  };

  handleInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  searchArtist = (e, context) => {
    e.preventDefault();
    const API_KEY = "Dx2IcBYjQ1R9rA7e";
    const artist = this.state.query;
    fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${API_KEY}&query=${artist}`)
    .then(resp => resp.json())
    .then(resp => {
      const artist_list = resp.resultsPage.results.artist.map(
        artist => {
          return {
            id: artist.id,
            name: artist.displayName
          }
        });  
          if(artist_list.length===1) {
            context.searchEvent(artist);
          } else {
            context.addItem(artist_list);
            context.openPopup();
          }         
    });
  };

  searchCity = (e, context) => {
    e.preventDefault();
    const API_KEY = "Dx2IcBYjQ1R9rA7e";
    const city = this.state.query;
    fetch(`https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=${API_KEY}`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
      const cities_list = resp.resultsPage.results.location.map(
        city => {
          return {
            id: city.metroArea.id,
            name: city.city.displayName,
            country: city.metroArea.country.displayName,
            area: city.metroArea.displayName,
            state: (city.metroArea.country.displayName==="US"||city.metroArea.country.displayName==="Canada") ? city.metroArea.state.displayName : null, 
          }
        });
        if(cities_list.length===1) {
          //search event with this city
        } else {
          context.addItem(cities_list);
          context.openPopup(); //add cities features
        }
        console.log(cities_list);
    });
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <form className={styles.wrapper} onSubmit={e => (
            this.props.type === "search-artist"
            ? this.searchArtist(e, context)
            : this.searchCity(e, context))}>
            <input
              onChange={this.handleInputChange}
              value={this.state.query}
              className={styles.input}
              id={this.props.type}
              type="text"
              name={this.props.type}
              placeholder={
                this.props.type === "search-artist"
                  ? "Artist name..."
                  : "City name..."
              }
            />
            <Submit name={this.props.type} />
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default SearchInput;
