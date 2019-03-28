/*fetch("https://developers.zomato.com/api/v2.1/cities?q=Gdansk&count=10", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "user-key": "961e2dcb5435fde8f2fa4f970d94c9f5"
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
        resp.items.forEach(book => {
            console.log(`Tytuł: ${book.volumeInfo.title}`);
            console.log(`Ilość stron: ${book.volumeInfo.pageCount}`);
            console.log(`Data publikacji: ${book.volumeInfo.publishedDate}`);
        })
    })
    const url = "https://developers.zomato.com/api/v2.1/search?entity_id=266&entity_type=city&count=10";

    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "user-key": "961e2dcb5435fde8f2fa4f970d94c9f5"
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
        resp.restaurants.forEach(res => {
            console.log(res.restaurant.id);
            console.log(res.restaurant.name);
            console.log(res.restaurant.photos_url);
        })
    })*/
    const search = document.getElementById('submit-button');
    const API_KEY = 'Dx2IcBYjQ1R9rA7e';

    function showResults(events_container) {
        const results_box = document.getElementById('search-results');
        console.log(events_container.resultsPage.totalEntries);
        if(events_container.resultsPage.totalEntries > 0) {
            for(let i=0; i<events_container.resultsPage.results.event.length; i++) {
                const el = document.createElement("div");
                el.classList.add("result");
                el.innerText = events_container.resultsPage.results.event[i].displayName;
                results_box.appendChild(el);
            }
        }
        else {
            const el = document.createElement("div");
            el.classList.add("result");
            el.innerText = "We're sorry, but there is no future events for this band.";
            results_box.appendChild(el);
        }
    }

    search.addEventListener("click", (event) => {
        event.preventDefault();
        const artist = document.getElementById('search-artist').value;
        const location = document.getElementById('search-city').value;
        fetch(`https://api.songkick.com/api/3.0/search/locations.json?query=${location}&apikey=${API_KEY}`)
            .then(resp => resp.json())
            .then(resp => {
                const location_id = resp.resultsPage.results.location[0].metroArea.id;
                fetch(`https://api.songkick.com/api/3.0/events.json?apikey=${API_KEY}&location=sk:${location_id}&artist_name=${artist}`)
                .then(resp => resp.json())
                .then(resp => {
                console.log(resp);
                showResults(resp);
                })
            });
        
    });