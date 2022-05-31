
// https://www.omdbapi.com/?s=batman&apikey=585f9cc7

const moviesUL = document.getElementById('moviesUL')
let request = new XMLHttpRequest()

request.open('GET', 'https://www.omdbapi.com/?s=batman&apikey=585f9cc7')
request.send()

// load event is fired when the request has been completed 
request.addEventListener('load', function () {

    console.log(this)

    // JSON.parse will parse the response from the server 
    // and give you an object 
    // responseText is a string which represents the response from the server 
    let movies = JSON.parse(this.responseText)

    // creating postItems as an array of <LI> 
    let movieItems = movies.Search.map(function (movie) {
        return `<li>
            <label>${movie.Title} </label>
            <p><img src=${movie.Poster}></img></p>
            <p>${movie.imdbID}</p>
            
        </li>`
    })

    console.log(this.responseText)
    console.log(movies)

    // assigning postsUL so it can display all postItems 
    moviesUL.innerHTML = movieItems.join('')

})

