const search_artist = document.getElementById("submit-artist");
const search_city = document.getElementById("submit-city");
const API_KEY = "Dx2IcBYjQ1R9rA7e";

search_artist.addEventListener("click", e => {
  e.preventDefault();
  const artist = document.getElementById("search-artist").value;
  fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${API_KEY}&query=${artist}`)
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
        const artist_list = [];
        for (let i=0; i<resp.resultsPage.results.artist.length; i++) {
            const artist = new Artist(
                resp.resultsPage.results.artist[i].id,
                resp.resultsPage.results.artist[i].displayName
            );
            artist_list.push(artist);
        }
        console.log(artist_list);
        const artist_id = chooseArtist(artist_list);
        console.log(artist_id);
    });

  
  /*fetch(
    `https://api.songkick.com/api/3.0/events.json?apikey=${API_KEY}&artist_name=${artist}`
  )
    .then(resp => resp.json())
    .then(resp => {
      const events_details = [];
        let events_number = resp.resultsPage.totalEntries;
        if (events_number > 50) events_number=50;
      for (let i = 0; i < events_number; i++) {
        const date = resp.resultsPage.results.event[i].start.date;
        const city = resp.resultsPage.results.event[i].location.city;
        const artist_name =
          resp.resultsPage.results.event[i].performance[0].artist.displayName;
        const venue = resp.resultsPage.results.event[i].venue.displayName;
        const available = true;
        const tickets_link = resp.resultsPage.results.event[i].uri;
        const event = new Event(
          date,
          city,
          artist_name,
          venue,
          available,
          tickets_link
        );
        events_details.push(event);
      }
      showResults(events_details);
    });*/
});

class Event {
  constructor(date, city, artist_name, venue, available, tickets_link) {
    this.date = date;
    this.city = city;
    this.artist_name = artist_name;
    this.venue = venue;
    this.available = available;
    this.tickets_link = tickets_link;
  }
}

class Artist {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

function chooseArtist (artist_list) {
    if(artist_list.length === 1) { return artist_list[0].id; }
    else { 
        const popup = document.getElementById("popup");
        popup.classList.add("popup--open");
        popup.innerText = "Choose artist:";
        artist_list.forEach(element => {
            const el = document.createElement("button");
            el.innerText = `${element.name}`;
            el.dataset.id = `${element.id}`;
            popup.appendChild(el);
            el.addEventListener("click", function() {
                return this.dataset.id;
            });
        });
    }
}

function showResults(events_container) {
  const results_box = document.getElementById("search-results");
  
  while (results_box.firstChild) {
    results_box.removeChild(results_box.firstChild);
  };

  if (events_container.length > 0) {
    for (let i = 0; i < events_container.length; i++) {
      const row = document.createElement("tr");

      const el = document.createElement("td");
      el.innerText = events_container[i].date;
      row.appendChild(el);
      const el1 = document.createElement("td");
      el1.innerText = events_container[i].city;
      row.appendChild(el1);
      const el2 = document.createElement("td");
      el2.innerText = events_container[i].artist_name;
      row.appendChild(el2);
      const el3 = document.createElement("td");
      el3.innerText = events_container[i].venue;
      row.appendChild(el3);
      const el4 = document.createElement("td");
      el4.innerText = events_container[i].available;
      row.appendChild(el4);
      const el5 = document.createElement("td");
      const a = document.createElement("a");
      a.setAttribute("href", `${events_container[i].tickets_link}`);
      a.innerText = "GO!";
      el5.appendChild(a);
      row.appendChild(el5);

      results_box.appendChild(row);
      
      const results_container = document.getElementById("main-container");
      results_container.classList.add("main-container--search--changed");
    }
  } else {
    const el = document.createElement("span");
    el.classList.add("result");
    el.innerText = "We're sorry, but there is no future events for this band.";
    results_box.appendChild(el);
  }
}
