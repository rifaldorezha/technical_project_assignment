
let IMG = "https://image.tmdb.org/t/p/w500";
let API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=b8e8d8770089f3b74e905ce78a3c7c2e&language=en-US";
let SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=b8e8d8770089f3b74e905ce78a3c7c2e&query=";



let listMovies = document.getElementById("list-movie")
let content = document.querySelector(".content");
let getDataMovie = async (URL) => {
    let response = await fetch(URL);
    let movies = await response.json();
    

    movies.results.forEach((item) => {
    listMovies.innerHTML += 
    `<div class="p-2">
    <div class="flex-col card m-auto" style="width: 15rem; height:100%; ">
        <img src="${IMG + item.poster_path}" alt="" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <h5 class="card-text">Realese : ${item.release_date}</h5>
            <h5 class="card-text">Rating : ${item.vote_average}</h5>
    </div>
</div>`;
});
};

let getDataSearch = async (URL) => {
    let response = await fetch(URL);
    let movies = await response.json();
    let html = "";

movies.results.forEach((item) => {
    let htmlSegment = 
    `<div class="p-2">
    <div class="flex-col card m-auto" style="width: 20rem; height:100%;">
        <img src="${IMG + item.poster_path}" alt="" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <h5 class="card-text">Realese : ${item.release_date}</h5>
            <h5 class="card-text">Rating : ${item.vote_average}</h5>
        </div>
    </div>
    </div>`;

    html += htmlSegment;
});

content.innerHTML = html;
};

getDataMovie(API_URL);


let inputSearch = document.getElementById("cari");
let but = document.getElementById("btn");


btn.addEventListener("click", (e) => {
let searchValue = inputSearch.value;
e.preventDefault();
getDataSearch(SEARCH_URL + searchValue + "&page=1");
});

