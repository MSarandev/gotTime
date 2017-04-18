// Last edit - MAX 18/04
// Contents:
// Books API linked to btn genre
// Books display in modal
// Books searchbar/button removed
// Youtube API imported + linked
// Youtube videos pulled based on btn genre


//Last edited on 18/04/2017 @ 0000 by Vlad
//Contents:
//Line 13 - 114: variables and functions for "fixed" button generation (category buttons, about us, back)
//Line 116 - 169: variables and functions for genre generation
//Line 171 - 250: variables and functions for generating buttons based on selected category and generated genres
//Line 262: function for FILMS API OUTPUT
//Line 271: function for MUSIC API OUTPUT
//Line 288: function for BOOKS API OUTPUT
//Line 297: function for VIDEOS API OUTPUT
//Line 306 till end: function for random button; function for konami code

//stores app's main buttons - used to edit button contents and behaviour; stored in array so that changes can be done in loop
var appButtons = [];

//puts app's main buttons into array for later updates
function getHtmlButtons(){
  // Fetch all the btn containers
  appButtons.push(document.getElementById("container_col1_btn1"));
  appButtons.push(document.getElementById("container_col1_btn2"));
  appButtons.push(document.getElementById("container_col1_btn3"));
  appButtons.push(document.getElementById("container_col2_btn1"));
  appButtons.push(document.getElementById("container_col2_btn2"));
  appButtons.push(document.getElementById("container_col2_btn3"));
}

//WIP
//arrays of icons that are used on buttons once category is chosen
var icons = ["fa fa-bicycle", "fa fa-car", "fa fa-truck", "fa fa-plane", "fa fa-rocket", "fa fa-bus"];
var icons2 = ["glyphicons glyphicons-dice-1", "glyphicons glyphicons-dice-2", "glyphicons glyphicons-dice-3", "glyphicons glyphicons-dice-4", "glyphicons glyphicons-dice-5", "glyphicons glyphicons-dice-6"];


//following six functions are used for restoring main buttons to initial state without reloading page; called on BACK button click
//takes div container as parameter and replaces it's current contents
//new contents are hyperlink that launches respective function and/or opens modal window
//hyperlink's child tags are icon and a paragrah
//functions are created with parameter so that placements of buttons can be easily changed
//IMPORTANT - if main buttons are edited in HTML file, then those changes will need to repeat in these functions as well

//FILM category button
function makeFilmsButton(htmlElement){
  htmlElement.innerHTML =
  '<a href="#" data-toggle="modal" onclick="clickMeFilms()">' +
  '<i class="glyphicon glyphicon-facetime-video"></i>' +
  '<p>Films</p>' +
  '</a>';
}

//MUSIC category button
function makeMusicButton(htmlElement){
  htmlElement.innerHTML =
  '<a href="#" data-toggle="modal" onclick="clickMeMusic()">' +
  '<i class="fa fa-music"></i>' +
  '<p>Music</p>' +
  '</a>';
}

//TODO: change onclick value once books category is sorted out
//BOOKS category button
function makeBooksButton(htmlElement){
  htmlElement.innerHTML =
  '<a href="#" data-toggle="modal" onclick="clickMeBooks()">' +
  '<i class="fa fa-book"></i>' +
  '<p>Books</p>' +
  '</a>';
}

//VIDEO category button
function makeVideosButton(htmlElement){
  htmlElement.innerHTML =
  '<a href="#" data-toggle="modal" onclick="clickMeVideo()">' +
  '<i class="glyphicon glyphicon-hd-video"></i>' +
  '<p>Video</p>' +
  '</a>';
}

//RANDOM button
function makeRandomButton(htmlElement){
  htmlElement.innerHTML =
  '<a href="#generated-modal" data-toggle="modal" onclick="randomButton()">' +
  '<i class="fa fa-random"></i>' +
  '<p>Random!</p>' +
  '</a>';
}

//ABOUT US button
function makeAboutUsButton(htmlElement){
  htmlElement.innerHTML =
  '<a href="#aboutus-modal" data-toggle="modal">' +
  '<i class="fa fa-user"></i>' +
  '<p>About Us</p>' +
  '</a>';
}

//TODO: change order?
//restoring main buttons to initial state; here you can change order of buttons by editing array's element number
//currently set to match original order
function refreshMainButtons(){
  makeAboutUsButton(appButtons[2]);
  makeBooksButton(appButtons[3]);
  makeFilmsButton(appButtons[0]);
  makeMusicButton(appButtons[1]);
  makeRandomButton(appButtons[5]);
  makeVideosButton(appButtons[4]);
}

//BACK button - restores app's main button's initial state upon click
function makeBackButton(htmlElement){
  htmlElement.innerHTML =
  '<a href="#" data-toggle="modal" onclick="refreshMainButtons()">' +
  '<i class="fa fa-reply"></i>' +
  '<p>Back</p>' +
  '</a>';
}


//contains few randomly chosen genres (amount of genres is set by function's loadGenres parameter)
var selected_genres = [];

//TODO: edit any genres?
//generates random genres based on category; saved genres are stored in selected_genres array
function loadGenres(category, amount){
  //creating temporary array and filling it with pool of genres based on given category
  var storage_genres = [];
  switch (category) {
    case "films":
    storage_genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "Science Fiction", "Thriller", "TV Movie", "War", "Western"];
    break;
    case "music":
    //music genres are dynamically taken from deezer api upon page load, so that images for them can be displayed on buttons instead of icons
    //deezerMusicGenres variable as well as getDeezerMusicGenres function are located in musicScripts.js
    //stores array of objects; used keys - name, id, picture_small
    storage_genres = deezerMusicGenres;
    break;
    case "books":
    storage_genres = ["Biography", "Comedy", "Drama", "Fantasy", "Horror", "Non-fiction", "Poetry",   "Romance novel", "Satire", "Science Fiction", "Thriller", "Tragedy", "Tragicomedy"];
    break;
    case "videos":
    storage_genres = ["Animation","Documentary","Cars","Music","Animals","Sports","Travel", "News","Gaming","Vlog","Podcast","Comedy","Politics","Style", "DIY","Education","Science","Technology"];
    break;
    default:
    //in case of wrong category given will output a message in console and return false
    console.log("Wrong category given: " + category);
    return false;
  }

  //variable for storing randomly generated number
  var generated;
  //clearing array in case of repeated use
  selected_genres = [];

  //loop runs until X amount of genres is added to selected_genres array
  while (selected_genres.length < amount) {
    //generating random number - from 0 to X (range of all genres in pool)
    generated = Math.floor(Math.random() * storage_genres.length);
    //checking whether generated genre is already added to array - ensures of not having duplicates
    if ((selected_genres.includes(storage_genres[generated])) != true) {
      //genre has not been added - adding to array
      selected_genres.push(storage_genres[generated]);
      //displaying selected genre - FOR TESTING
      //since music array stores objects instead of strings, different output is required
      // if (category != "music") {
      // console.log("Selected Genre " + selected_genres.length + ": " + storage_genres[generated]);
      // } else {
      // console.log("Selected Genre " + selected_genres.length + ": " + storage_genres[generated].name);
      // }
    } //if statement end
  } //while loop end
} //function loadGenres end


//TODO: change icons/images?
//following four functions represent actions of category button's press
//generates 5 random genres of selected category and changes 5 buttons to represent them
//upon clicking button, genre is passed to category's function
//6th button is BACK
//works in similar way as refreshMainButtons' sub functions

// FILMS
function clickMeFilms(){
  //get random genres
  loadGenres("films", 5);
  //update the contents of each button container
  //updates 5 buttons with name and icon/image of genre and sets onclick parameter according to category's genre
  //all values need to be stored in an array
  for (var i=0; i<5; i++) {
    appButtons[i].innerHTML =
    '<a href="#generated-modal"" data-toggle="modal" onclick="fetchFilmByGenre(selected_genres[' + i + '])">' +
    '<i class="' + icons[i] + '"></i>' +
    '<p>' + selected_genres[i] + '</p>' +
    '</a>';
  }
  //generating BACK button
  makeBackButton(appButtons[5]);
}

//TODO: replace genre images to generic icons?
// MUSIC
function clickMeMusic(){
  //get random genres
  loadGenres("music", 5);
  //update the contents of each button container
  //updates 5 buttons with name and icon/image of genre and sets onclick parameter according to category's genre
  //all values need to be stored in an array
  for (var i=0; i<5; i++) {
    appButtons[i].innerHTML =
    '<a href="#generated-modal"" data-toggle="modal" onclick="fetchMusicByGenre(selected_genres[' + i + '])">' +
    '<img src="' + selected_genres[i].picture_small + '">' +
    '<p>' + selected_genres[i].name + '</p>' +
    '</a>';
  }
  //generating BACK button
  makeBackButton(appButtons[5]);
}

// BOOKS
function clickMeBooks(){
  //get random genres
  loadGenres("books", 5);
  //update the contents of each button container
  //updates 5 buttons with name and icon/image of genre and sets onclick parameter according to category's genre
  //all values need to be stored in an array
  for (var i=0; i<5; i++) {
    appButtons[i].innerHTML =
    '<a href="#books-modal"" data-toggle="modal" onclick="fetchBookByGenre(selected_genres[' + i + '])">' +
    '<i class="' + icons[i] + '"></i>' +
    '<p>' + selected_genres[i] + '</p>' +
    '</a>';
  }
  //generating BACK button
  makeBackButton(appButtons[5]);
}

// VIDEOS
function clickMeVideo(){
  //get random genres
  loadGenres("videos", 5);
  //update the contents of each button container
  //updates 5 buttons with name and icon/image of genre and sets onclick parameter according to category's genre
  //all values need to be stored in an array
  for (var i=0; i<5; i++) {
    appButtons[i].innerHTML =
    '<a href="#generated-modal"" data-toggle="modal" onclick="fetchVideoByGenre(selected_genres[' + i + '])">' +
    '<i class="' + icons[i] + '"></i>' +
    '<p>' + selected_genres[i] + '</p>' +
    '</a>';
  }
  //generating BACK button
  makeBackButton(appButtons[5]);
}


//TODO: add functionality to all buttons
//following four buttons represent actions of pressed genre button, separated by category
//functions are passed genre to process, so that you can throw inside of them your api specific functions
//IMPORTANT: this is where the output from apis is happening
//end container to hold html content is div with id=generatedResult




//FILM API GOES HERE
function fetchFilmByGenre(filmGenre){
  //code that runs upon film genre button press
  //document.getElementById("generatedResult").innerHTML = '<p>Film!!! - ' + filmGenre + '</p>';
  document.getElementById("generatedResult").innerHTML = '';
  var randomzz = Math.floor((Math.random() * 100) + 1);
  var genrenumber = "0";


  switch(filmGenre){
      case "War":
          genrenumber = '10752';
          break;
      case "Action":
          genrenumber = '28';
          break;
      case "Adventure":
          genrenumber = '12';
          break;
      case "Animation":
          genrenumber = '16';
          break;
      case "Comedy":
          genrenumber = '35';
          break;
      case "Crime":
          genrenumber = '80';
          break;
      case "Documentary":
          genrenumber = '99';
          break;
      case "Drama":
          genrenumber = '18';
          break;
      case "Family":
          genrenumber = '10751';
          break;
      case "Fantasy":
          genrenumber = '14';
          break;
      case "History":
          genrenumber = '36';
          break;
      case "Horror":
          genrenumber = '27';
          break;
      case "Music":
          genrenumber = '10402';
          break;
      case "Mystery":
          genrenumber = '9648';
          break;
      case "Romance":
          genrenumber = '10749';
          break;
      case "Science Fiction":
          genrenumber = '878';
          break;
      case "TV Movie":
          genrenumber = '10770';
          break;
      case "Thriller":
          genrenumber = '53';
          break;
  }


alert(filmGenre); // I LEFT THE DEBUG ON
  

  $.ajax({
    url: "https://api.themoviedb.org/3/genre/"+ genrenumber +"/movies?sort_by=created_at.desc&include_adult=false&language=en-US&api_key=9c0081be84efec2670ae12b04e837e62",
    dataType: "json",

    success: function(data) {
      for(i = 0; i < 2; i++){

        var randomindex = Math.floor((Math.random() * 20) + 1);
        do {
          randomindex = Math.floor((Math.random() * 20) + 1);
        } while(randomindex === ri);
        generatedResult.innerHTML += "<center><img src=https://image.tmdb.org/t/p/w500" + data.results[randomindex].poster_path +" width=" + "189"+" height="+"255"+" alt="+"lorem"+"></center>"
        generatedResult.innerHTML += "<div class="+"feature-content"+">"
        generatedResult.innerHTML += "<h4><center>" + data.results[randomindex].title + "</center></h4>"
        generatedResult.innerHTML += "<div class="+"table-responsive"+">"
        generatedResult.innerHTML += "<table class="+"table"+">"
        generatedResult.innerHTML += "<tr>"
        generatedResult.innerHTML += "<td><b>Release Date: </b></td>"
        generatedResult.innerHTML += data.results[randomindex].release_date
        generatedResult.innerHTML += "</br>"
        generatedResult.innerHTML += "<td><b>Grade: </b></td>"
        generatedResult.innerHTML += data.results[randomindex].vote_average
        generatedResult.innerHTML += "</br>"
        generatedResult.innerHTML += "<td><b>Genres: </b></td>"
        generatedResult.innerHTML += data.results[randomindex].genre_ids
        generatedResult.innerHTML += "</br>"
        generatedResult.innerHTML += "<td><b>Description: </b></td>"
        generatedResult.innerHTML += data.results[randomindex].overview
        generatedResult.innerHTML += "</br>"
        generatedResult.innerHTML += "</tr>"
        generatedResult.innerHTML += "</table>"
        generatedResult.innerHTML += "</div>"
        generatedResult.innerHTML += "</br>"
        generatedResult.innerHTML += "</br>"
        var ri = randomindex;

      }
    },

    type: 'GET'
  });
}




//MUSIC API GOES HERE
function fetchMusicByGenre(musicGenre){
  //code that runs upon music genre button press
  //document.getElementById('generatedResult').innerHTML = musicGenre.name;
  if (musicGenre.id != "") {
    //FOR TESTING
    console.log("Genre: " + musicGenre.name + ", Deezer ID: " + musicGenre.id);
    getDeezerSongByGenre(musicGenre.id);
  } else {
    console.log("Selected genre (" + musicGenre.name + ") has no Deezer ID assigned");
  }
  //document.getElementById("generatedResult").innerHTML += '<p>Music - ' + musicGenre.name + '</p>';
}



// UPDATED 18/04 @MAX
// <><><><><><><><><>
//BOOK API GOES HERE
function fetchBookByGenre(bookGenre){
    //code that runs upon book genre button press
    var search = bookGenre;
    document.getElementById('result').innerHTML = "";
    var randomz = Math.floor((Math.random() * 100) + 1);

    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=subject:" + search + "&startIndex=" + randomz + "&language:en",
      dataType: "json",

      success: function(data) {
        for(i = 0; i < 2; i++){
          result.innerHTML += "<center><img src=" + data.items[i].volumeInfo.imageLinks.thumbnail +" width=" + "189"+" height="+"255"+" alt="+"lorem"+"></center>"
          result.innerHTML += "<div class="+"feature-content"+">"
          result.innerHTML += "<h4><center>" + data.items[i].volumeInfo.title + "</center></h4>"
          result.innerHTML += "<div class="+"table-responsive"+">"
          result.innerHTML += "<table class="+"table"+">"
          result.innerHTML += "<tr>"
          result.innerHTML += "<td><b>Publication Date: </b></td>"
          result.innerHTML += data.items[i].volumeInfo.publishedDate
          result.innerHTML += "</br>"
          result.innerHTML += "<td><b>Categories: </b></td>"
          result.innerHTML += data.items[i].volumeInfo.categories
          result.innerHTML += "</br>"
          result.innerHTML += "<td><b>Pages: </b></td>"
          result.innerHTML += data.items[i].volumeInfo.pageCount
          result.innerHTML += "</br>"
          result.innerHTML += "<td><b>Description: </b></td>"
          result.innerHTML += data.items[i].volumeInfo.description
          result.innerHTML += "</br>"
          result.innerHTML += "</tr>"
          result.innerHTML += "</table>"
          result.innerHTML += "</div>"
          result.innerHTML += "</br>"
          result.innerHTML += "<a href=" + data.items[i].saleInfo.buyLink + " target=" + "_blank" + "><center><button type=" + "button" + "class=" + "btn btn-success" + ">Buy the Book</button></center></a>"
          result.innerHTML += "</br>"
          result.innerHTML += "</div>"
          result.innerHTML += "</br>"
          result.innerHTML += "</br>"

        }
      },

      type: 'GET'
    });
  }



// UPDATED 18/04 @MAX
// <><><><><><><><><>
//VIDEOS API GOES HERE
function fetchVideoByGenre(videoGenre){
    // MAKE SURE TO EXEC GAPI AFTER THE DOCUMENT IS READY
    $(document).ready(function() {
        gapi.client.setApiKey('AIzaSyCSceFCV5K0_4O6Rn52sm-ywlvH1UXLBGw'); // assign the API key
        gapi.client.load('youtube', 'v3', function () { // Youtube authentication
            makeRequest(); // More youtube authentication
          });
      });

    function makeRequest() {
        // define the request
        var q = videoGenre; // give the query a keyword (FROM GENRE LIST)
        var request = gapi.client.youtube.search.list({ // youtube request code
            q: q, // keyword
            part: 'snippet', // specify what to return
            maxResults: 2 // results limit
          });

        // execute the request
        request.execute(function(response)  {
            $('#generatedResult').empty(); // clears the container
            var srchItems = response.result.items; // defines the return type

            $.each(srchItems, function(index, item) { // for each loop until the max return item val
                vidTitle = item.snippet.title; // fetch the title

                // fetch the URL and prepare for embedding
                var urlString = "https://www.youtube.com/embed/" + item.id.videoId;

                // create new container for each video
                $('#generatedResult').append('<span>'+
                  vidTitle+
                  '</br>' +
                    // define the iframe and plug src
                    '<iframe src="'+urlString+'" width="800px" height="600px"></iframe>' +
                    '</span>' + '</br></br>');
              })
          })
      }
    }




//RANDOM button - randomly choses category, one random genre and runs category specific api functions
function randomButton(){
  var randomCategory = Math.floor((Math.random() * 4) + 1);
  switch (randomCategory) {
    //films
    case 1:
    console.log("Randomly selected category is FILM");
    loadGenres("films", 1);
    fetchFilmByGenre(selected_genres[0]);
    break;
    //music
    case 2:
    console.log("Randomly selected category is MUSIC");
    loadGenres("music", 1);
    fetchMusicByGenre(selected_genres[0]);
    break;
    //books
    case 3:
    console.log("Randomly selected category is BOOK");
    loadGenres("books", 1);
    fetchBookByGenre(selected_genres[0]);
    break;
    //videos
    case 4:
    console.log("Randomly selected category is VIDEO");
    loadGenres("videos", 1);
    fetchVideoByGenre(selected_genres[0]);
    break;
    //in case of random button being incorrect will output a message in console and return false
    default:
    console.log("Wrong category given: " + randomCategory);
    return false;
  }
} //function randomButton end

//function for executing konami code on page; starts as soon as page's body loads
//Konami code - up, up, down, down, left, rigth, left, right, B, A
//code below is "ilja" (not case sensitive)
function konamiCode() {
  //array variable for storing input
  var enteredCode = [];
  //actions performed after key press
  $('html').keydown(function (event) {
    //adding new key to array
    enteredCode.push(event.keyCode);
    //limiting size of array to last X keys (saves memory) - make sure array is at least same length as longest code
    if (enteredCode.length > 10) {
      enteredCode.shift();
    }

    //FOR TESTING
    //console.log("Entered key code: " + event.keyCode.toString());
    //console.log("Contents of array: " + enteredCode.toString());

    //checking if input matches konami code
    if (enteredCode.slice(-10).toString() == "38,38,40,40,37,39,37,39,66,65") {
      //KONAMI CODE SUCCESS!
      console.log("KONAMI CODE! - Now try typing team member's name");
      enteredCode = [];
    }
    //checking if input matches 2nd code
    if (enteredCode.slice(-4).toString() == "73,76,74,65") {
      console.log('Everything is designed by Ilja Magdenko (with little help of George Clooney)');
      $("body").html('<img src="http://www.newyorker.com/wp-content/uploads/2008/04/080414_r17095_p646-320.jpg" height="300">' +
        "<br><h1>Ilja Magdenko</h1><br><p>Desing By Ilja. and bla bla bla..</p>");
      $("img").animate({'height':'1000', 'align':'middle'}, 50000);
      enteredCode = [];
    }
  }); //key press actions end
} //function konamiCode end

//WIP function - FOR TESTING (duh!) - TO BE REMOVED
function test(){
  console.log("Test function has been triggered");
}
