  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZyx-LYc1-oV-dFlDdsmbhDI0FLttQVW4",
    authDomain: "wtfsww.firebaseapp.com",
    databaseURL: "https://wtfsww.firebaseio.com",
    projectId: "wtfsww",
    storageBucket: "wtfsww.appspot.com",
    messagingSenderId: "336077336011"
};

  firebase.initializeApp(config);

  // Variables and URL building elements
const tmdbApiKey = "90968a3a4b4657a1e2fce6130d75ba6f";
const ytApiKey = "AIzaSyC20vgTb7sNZe3ZoXWThFESKMjwCyPIof0";

  // initially loads with no medium and genre picked
let medium = ""
let genrePick = ""

// clicking a medium button will save "movie" or "TV" into the medium variable
$(".mediumRadio").click(function() {
  medium = this.value;
  console.log(medium);
});

// clicking a genre button will save a genre into the genrePick variable
$(".genreRadio").click(function() {
  genrePick = this.value;
  console.log(genrePick);
});

$( "#submitBtn").click(function() {
  let testResults = medium + " | " + genrePick;
  console.log(testResults);
});

/*const genre = [{
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 90,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    sciFi: 878,
    thriller: 53,
    war: 10752,
    western: 37
}];*/

let tmdbURL = "http://api.themoviedb.org/3/discover/" + medium + "?api_key=" + tmdbApiKey +
                 "&with_genres=" + genrePick;

let ytURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=" + tmdbResults.results.title + 
          " trailer&key=" + ytApiKey;

$("#submit").on("click", function(event) {
  $.ajax({
    url: tmdbURL,
    method: "GET"
  }).then(function(tmdbResults) {
    console.log(tmdbResults);
  })


  $.ajax({
    url: ytURL,
    method: "GET"
  }).then(function(ytResults){
  })

});