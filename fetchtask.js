document.querySelector("button").addEventListener("click", result);

async function result() {
  try {
    var ask = document.getElementById("Shows").value;
    var data1 = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`);
    var res = await data1.json();
    console.log(res);
    displayResults(res);
  } catch (error) {
    console.log(error);
  }
}

function displayResults(shows) {
  let main = document.querySelector("#mainbody");
  main.innerHTML = "";

  // shows.forEach((tvshow) => {
  if (shows.length > 0) {
    let tvshow = shows[0]; 
    let card = document.createElement("div");
    card.className = "centerbody";
    card.innerHTML = `
      <div class="card" style="width: 20rem; margin-left:2rem;background-color:beige">
        <img src="${
             tvshow.show.image.medium
        }" class="card-img-top" alt="${tvshow.show.name}">
        <div class="card-body">
          <h5 class="card-title"><p>Showname :</p>${tvshow.show.name}</h5>
          <p class="card-text">Genres : ${tvshow.show.genres.join(", ")}</p>
          <p class="card-text">Premiered Date : ${tvshow.show.premiered}</p>
          <p class="card-text">Ratings : ${tvshow.show.rating.average}</p>
          <p class="card-text">Show Running Time : ${
            tvshow.show.averageRuntime
          } minutes</p>
          <p class="card-text">Official Site: ${
            tvshow.show.officialSite
              ? `<a href="${tvshow.show.officialSite}" target="_blank">${tvshow.show.officialSite}</a>`
              : "N/A"
          }</p>
          <p class="card-text">Network :${
            tvshow.show.network ? tvshow.show.network.name : "N/A"
          }</p>
          <p class="card-text">Country :${
            tvshow.show.network ? tvshow.show.network.country.name : "N/A"
          }</p>
          <p class="card-text">Summary :${
            tvshow.show.summary ? tvshow.show.summary : "No summary available"
          }</p>
        </div>
      </div>
    `;
    main.appendChild(card);
  };
}
