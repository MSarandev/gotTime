
var count = 0; // Used to control function calling
var film_genres = []; // Used for dynamic genre generation
var music_genres = []; // Used for dynamic genre generation
var books_genres = []; // Used for dynamic genre generation
var videos_genres = []; // Used for dynamic genre generation

// Genres generation function below
// <><><>
// Films genre generation

function loadFilmGenres(){
	var storage_genres = ["Action", "Adventure", "Anime", "Art house", "Biopic", "Cartoons", "Comedy",
	"Crime", "Detective", "Disaster", "Documentary", "Drama", "Family", "Fantasy", "Historical", "Horror",
	"Musical", "Noir", "Romance", "Sci-Fi", "Sports", "Thriller", "TV shows", "War", "Western"];

	var rand_num = Math.floor(Math.random() * storage_genres.length) + 0; // get a random number

	do{
		// pushing first genre
		if(film_genres.length == 0){
			film_genres.push(storage_genres[rand_num]);
		}else{
			// fetch new rand.
			rand_num = Math.floor(Math.random() * storage_genres.length) + 0;

			// check if genre is in the array
			if(film_genres.indexOf(storage_genres[rand_num]) == -1){
				// not in array, push
				film_genres.push(storage_genres[rand_num]);
			}else{
				// genre present, fetch new one
			}
		}
	}while (film_genres.length < 5);
}

// Music genre generation

function loadMusicGenres(){
	var storage_genres = ["Blues", "Caribbean", "Classical", "Country", "Dance", "Disco", "Easy-listening",
	"Electronic", "Folk", "Hip-hop", "House", "Jazz", "Latin", "Metal", "Pop", "Reggae", "RnB", "Rock",
	"Techno", "Trance", "World"];

	var rand_num = Math.floor(Math.random() * storage_genres.length) + 0; // get a random number

	do{
		// pushing first genre
		if(music_genres.length == 0){
			music_genres.push(storage_genres[rand_num]);
		}else{
			// fetch new rand.
			rand_num = Math.floor(Math.random() * storage_genres.length) + 0;

			// check if genre is in the array
			if(music_genres.indexOf(storage_genres[rand_num]) == -1){
				// not in array, push
				music_genres.push(storage_genres[rand_num]);
			}else{
				// genre present, fetch new one
			}
		}
	}while (music_genres.length < 5);
}

// Books genre generation

function loadBooksGenre(){
	var storage_genres = ["Biography", "Comedy", "Drama", "Fantasy", "Horror", "Non-fiction", "Poetry",
	"Romance novel", "Satire", "Science Fiction", "Thriller", "Tragedy", "Tragicomedy"];

	var rand_num = Math.floor(Math.random() * storage_genres.length) + 0; // get a random number

	do{
		// pushing first genre
		if(books_genres.length == 0){
			books_genres.push(storage_genres[rand_num]);
		}else{
			// fetch new rand.
			rand_num = Math.floor(Math.random() * storage_genres.length) + 0;

			// check if genre is in the array
			if(books_genres.indexOf(storage_genres[rand_num]) == -1){
				// not in array, push
				books_genres.push(storage_genres[rand_num]);
			}else{
				// genre present, fetch new one
			}
		}
	}while (books_genres.length < 5);
}

// Videos genre generation

function loadVideosGenre(){
	var storage_genres = ["Animation","Documentary","Cars","Music","Animals","Sports","Travel",
		"News","Gaming","Vlog","Podcast","Comedy","Politics","Style",
		"DIY","Education","Science","Technology"];

	var rand_num = Math.floor(Math.random() * storage_genres.length) + 0; // get a random number

	do{
		// pushing first genre
		if(videos_genres.length == 0){
			videos_genres.push(storage_genres[rand_num]);
		}else{
			// fetch new rand.
			rand_num = Math.floor(Math.random() * storage_genres.length) + 0;

			// check if genre is in the array
			if(videos_genres.indexOf(storage_genres[rand_num]) == -1){
				// not in array, push
				videos_genres.push(storage_genres[rand_num]);
			}else{
				// genre present, fetch new one
			}
		}
	}while (videos_genres.length < 5);
}



// Generate film genres
// <> <> <> <> <> <> <>
// Initial function to load the genres

// Films Below
function clickMeFilms(){
	loadFilmGenres(); // get the genres

	if(count === 0){
		count = 1; // increment the counter

		// Fetch all the btn containers
		var col1btn1 = document.getElementById("container_col1_btn1"); // Column 1
		var col1btn2 = document.getElementById("container_col1_btn2"); // Column 1
		var col1btn3 = document.getElementById("container_col1_btn3"); // Column 1
		// ...
		var col2btn1 = document.getElementById("container_col2_btn1"); // Column 2
		var col2btn2 = document.getElementById("container_col2_btn2"); // Column 2
		var col2btn3 = document.getElementById("container_col2_btn3"); // Column 2


		// Update the contents of each button container
		// This allows us to recreate the buttons + assign new functions
		// without having to refresh the page with new HTML

		// <> <> <>

		// Update COL 1, BTN 1
		// -------------------
		col1btn1.innerHTML = ""; // empty the container


		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (1) to the genre selector modal
		col1btn1.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalFilms1" onclick="fetchFilmByGenre(film_genres[0])">' +
			'<i id="FilmGanreIcon1" class="glyphicon glyphicon-map-marker"></i>' +
			'<p id="war_films">'+film_genres[0]+'</p>' +
			'</a>';


		// Update COL 1, BTN 2
		// -------------------
		col1btn2.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (2) to the genre selector modal
		col1btn2.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalFilms2" onclick="fetchFilmByGenre(film_genres[1])">' +
			'<i id="FilmGanreIcon2" class="glyphicon glyphicon-heart-empty"></i>' +
			'<p id="romantic_films">'+film_genres[1]+'</p>' +
			'</a>';

		// Update COL 1, BTN 3
		// -------------------

		col1btn3.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (3) to the genre selector modal
		col1btn3.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalFilms3" onclick="fetchFilmByGenre(film_genres[2])">' +
			'<i id="FilmGanreIcon3" class="glyphicon glyphicon-record"></i>' +
			'<p id="thriller_films">'+film_genres[2]+'</p>' +
			'</a>';


		// ...

		// Update COL 2, BTN 1
		// -------------------

		col2btn1.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (4) to the genre selector modal
		col2btn1.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalFilms4" onclick="fetchFilmByGenre(film_genres[3])">' +
			'<i id="FilmGanreIcon4" class="glyphicon glyphicon-fire"></i>' +
			'<p id="horror_films">'+film_genres[3]+'</p>' +
			'</a>';

		// Update COL 2, BTN 2
		// -------------------

		col2btn2.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (5) to the genre selector modal
		col2btn2.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalFilms5" onclick="fetchFilmByGenre(film_genres[4])">' +
			'<i id="FilmGanreIcon5" class="glyphicon glyphicon-film"></i>' +
			'<p id="western_films">'+film_genres[4]+'</p>' +
			'</a>';

		// Update COL 2, BTN 3
		// -------------------

		col2btn3.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Onclick - Reload the page
		col2btn3.innerHTML =
			'<a href="#" data-toggle="modal" id="BackBtnA"' +
			'<i id="BackBtnIcon" class="fa fa-xing-square"></i>' +
			'<p id="randomID">Back</p>' +
			'</a>';

		// reload on click
		document.getElementById("BackBtnA").setAttribute('href', window.location.href);
	}
}

function fetchFilmByGenre(x){
	// THIS SHOULD LOAD A DYNAMIC MODAL BASED ON THE GENRE

	// Placeholder below
	document.getElementById("ModalFilms1").setAttribute("href", "#films-modal");
	document.getElementById("ModalFilms2").setAttribute("href", "#films-modal");
	document.getElementById("ModalFilms3").setAttribute("href", "#films-modal");
	document.getElementById("ModalFilms4").setAttribute("href", "#films-modal");
	document.getElementById("ModalFilms5").setAttribute("href", "#films-modal");
}


// Music Below
function clickMeMusic(){
	loadMusicGenres(); // load the genres

	if(count === 0){
		count = 1; // increment the counter

		// Fetch all the btn containers
		var col1btn1 = document.getElementById("container_col1_btn1"); // Column 1
		var col1btn2 = document.getElementById("container_col1_btn2"); // Column 1
		var col1btn3 = document.getElementById("container_col1_btn3"); // Column 1
		// ...
		var col2btn1 = document.getElementById("container_col2_btn1"); // Column 2
		var col2btn2 = document.getElementById("container_col2_btn2"); // Column 2
		var col2btn3 = document.getElementById("container_col2_btn3"); // Column 2


		// Update the contents of each button container
		// This allows us to recreate the buttons + assign new functions
		// without having to refresh the page with new HTML

		// <> <> <>

		// Update COL 1, BTN 1
		// -------------------
		col1btn1.innerHTML = ""; // empty the container


		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (1) to the genre selector modal
		col1btn1.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalMusic1" onclick="fetchMusicByGenre(music_genres[0])">' +
			'<i id="MusicGanreIcon1" class="fa fa-fire"></i>' +
			'<p id="music1">'+music_genres[0]+'</p>' +
			'</a>';


		// Update COL 1, BTN 2
		// -------------------
		col1btn2.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (2) to the genre selector modal
		col1btn2.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalMusic2" onclick="fetchMusicByGenre(music_genres[1])">' +
			'<i id="MusicGanreIcon2" class="glyphicon glyphicon-sound-7-1"></i>' +
			'<p id="music2">'+music_genres[1]+'</p>' +
			'</a>';

		// Update COL 1, BTN 3
		// -------------------

		col1btn3.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (3) to the genre selector modal
		col1btn3.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalMusic3" onclick="fetchMusicByGenre(music_genres[2])">' +
			'<i id="MusicGanreIcon3" class="glyphicon glyphicon-stats"></i>' +
			'<p id="music3">'+music_genres[2]+'</p>' +
			'</a>';


		// ...

		// Update COL 2, BTN 1
		// -------------------

		col2btn1.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (4) to the genre selector modal
		col2btn1.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalMusic4" onclick="fetchMusicByGenre(music_genres[3])">' +
			'<i id="MusicGanreIcon4" class="glyphicon glyphicon-music"></i>' +
			'<p id="music4">'+music_genres[3]+'</p>' +
			'</a>';

		// Update COL 2, BTN 2
		// -------------------

		col2btn2.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (5) to the genre selector modal
		col2btn2.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalMusic5" onclick="fetchMusicByGenre(music_genres[4])">' +
			'<i id="MusicGanreIcon5" class="fa fa-microphone"></i>' +
			'<p id="music5">'+music_genres[4]+'</p>' +
			'</a>';

		// Update COL 2, BTN 3
		// -------------------

		col2btn3.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Onclick - Reload the page
		col2btn3.innerHTML =
			'<a href="#" data-toggle="modal" id="BackBtnA"' +
			'<i id="BackBtnIcon" class="fa fa-xing-square"></i>' +
			'<p id="randomID">Back</p>' +
			'</a>';

		// reload on click
		document.getElementById("BackBtnA").setAttribute('href', window.location.href);
	}
}

function fetchMusicByGenre(x){
	// THIS SHOULD LOAD A DYNAMIC MODAL BASED ON THE GENRE

	// Placeholder below
	document.getElementById("ModalMusic1").setAttribute("href", "#music-modal");
	document.getElementById("ModalMusic2").setAttribute("href", "#music-modal");
	document.getElementById("ModalMusic3").setAttribute("href", "#music-modal");
	document.getElementById("ModalMusic4").setAttribute("href", "#music-modal");
	document.getElementById("ModalMusic5").setAttribute("href", "#music-modal");
}


// Books Below
function clickMeBooks(){
	loadBooksGenre(); // load the genres

	if(count === 0){
		count = 1; // increment the counter

		// Fetch all the btn containers
		var col1btn1 = document.getElementById("container_col1_btn1"); // Column 1
		var col1btn2 = document.getElementById("container_col1_btn2"); // Column 1
		var col1btn3 = document.getElementById("container_col1_btn3"); // Column 1
		// ...
		var col2btn1 = document.getElementById("container_col2_btn1"); // Column 2
		var col2btn2 = document.getElementById("container_col2_btn2"); // Column 2
		var col2btn3 = document.getElementById("container_col2_btn3"); // Column 2


		// Update the contents of each button container
		// This allows us to recreate the buttons + assign new functions
		// without having to refresh the page with new HTML

		// <> <> <>

		// Update COL 1, BTN 1
		// -------------------
		col1btn1.innerHTML = ""; // empty the container


		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (1) to the genre selector modal
		col1btn1.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalBooks1" onclick="fetchBooksByGenre(books_genres[0])">' +
			'<i id="BooksGanreIcon1" class="fa fa-pagelines"></i>' +
			'<p id="books1">'+books_genres[0]+'</p>' +
			'</a>';


		// Update COL 1, BTN 2
		// -------------------
		col1btn2.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (2) to the genre selector modal
		col1btn2.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalBooks2" onclick="fetchBooksByGenre(books_genres[1])">' +
			'<i id="BooksGanreIcon2" class="glyphicon glyphicon-heart-empty"></i>' +
			'<p id="books2">'+books_genres[1]+'</p>' +
			'</a>';

		// Update COL 1, BTN 3
		// -------------------

		col1btn3.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (3) to the genre selector modal
		col1btn3.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalBooks3" onclick="fetchBooksByGenre(books_genres[2])">' +
			'<i id="BooksGanreIcon3" class="fa fa-puzzle-piece"></i>' +
			'<p id="books3">'+books_genres[2]+'</p>' +
			'</a>';


		// ...

		// Update COL 2, BTN 1
		// -------------------

		col2btn1.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (4) to the genre selector modal
		col2btn1.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalBooks4" onclick="fetchBooksByGenre(books_genres[3])">' +
			'<i id="BooksGanreIcon4" class="fa fa-eye-slash"></i>' +
			'<p id="books4">'+books_genres[3]+'</p>' +
			'</a>';

		// Update COL 2, BTN 2
		// -------------------

		col2btn2.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (5) to the genre selector modal
		col2btn2.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalBooks5" onclick="fetchBooksByGenre(books_genres[4])">' +
			'<i id="BooksGanreIcon5" class="fa fa-magic"></i>' +
			'<p id="books5">'+books_genres[4]+'</p>' +
			'</a>';

		// Update COL 2, BTN 3
		// -------------------

		col2btn3.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Onclick - Reload the page
		col2btn3.innerHTML =
			'<a href="#" data-toggle="modal" id="BackBtnA"' +
			'<i id="BackBtnIcon" class="fa fa-xing-square"></i>' +
			'<p id="randomID">Back</p>' +
			'</a>';

		// reload on click
		document.getElementById("BackBtnA").setAttribute('href', window.location.href);
	}
}

function fetchBooksByGenre(x){
	// THIS SHOULD LOAD A DYNAMIC MODAL BASED ON THE GENRE

	// Placeholder below
	document.getElementById("ModalBooks1").setAttribute("href", "#books-modal");
	document.getElementById("ModalBooks2").setAttribute("href", "#books-modal");
	document.getElementById("ModalBooks3").setAttribute("href", "#books-modal");
	document.getElementById("ModalBooks4").setAttribute("href", "#books-modal");
	document.getElementById("ModalBooks5").setAttribute("href", "#books-modal");
}


// Video Below
function clickMeVideo(){
	if(count === 0){
		count = 1; // increment the counter

		// Fetch all the btn containers
		var col1btn1 = document.getElementById("container_col1_btn1"); // Column 1
		var col1btn2 = document.getElementById("container_col1_btn2"); // Column 1
		var col1btn3 = document.getElementById("container_col1_btn3"); // Column 1
		// ...
		var col2btn1 = document.getElementById("container_col2_btn1"); // Column 2
		var col2btn2 = document.getElementById("container_col2_btn2"); // Column 2
		var col2btn3 = document.getElementById("container_col2_btn3"); // Column 2


		// Update the contents of each button container
		// This allows us to recreate the buttons + assign new functions
		// without having to refresh the page with new HTML

		// <> <> <>

		// Update COL 1, BTN 1
		// -------------------
		col1btn1.innerHTML = ""; // empty the container


		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (1) to the genre selector modal
		col1btn1.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalVideo1" onclick="fetchVideoByGenre(1)">' +
			'<i id="VideoGanreIcon1" class="glyphicon glyphicon-certificate"></i>' +
			'<p id="video1">Sports</p>' +
			'</a>';


		// Update COL 1, BTN 2
		// -------------------
		col1btn2.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (2) to the genre selector modal
		col1btn2.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalVideo2" onclick="fetchVideoByGenre(2)">' +
			'<i id="VideoGanreIcon2" class="glyphicon glyphicon-wrench"></i>' +
			'<p id="video2">DIY</p>' +
			'</a>';

		// Update COL 1, BTN 3
		// -------------------

		col1btn3.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (3) to the genre selector modal
		col1btn3.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalVideo3" onclick="fetchVideoByGenre(3)">' +
			'<i id="VideoGanreIcon3" class="fa fa-bug"></i>' +
			'<p id="video3">Science</p>' +
			'</a>';


		// ...

		// Update COL 2, BTN 1
		// -------------------

		col2btn1.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (4) to the genre selector modal
		col2btn1.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalVideo4" onclick="fetchVideoByGenre(4)">' +
			'<i id="VideoGanreIcon4" class="fa fa-pencil"></i>' +
			'<p id="video4">Beauty</p>' +
			'</a>';

		// Update COL 2, BTN 2
		// -------------------

		col2btn2.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Parse (5) to the genre selector modal
		col2btn2.innerHTML =
			'<a href="#" data-toggle="modal" id="ModalVideo5" onclick="fetchVideoByGenre(5)">' +
			'<i id="VideoGanreIcon5" class="fa fa-microphone"></i>' +
			'<p id="video5">Cover</p>' +
			'</a>';

		// Update COL 2, BTN 3
		// -------------------

		col2btn3.innerHTML = ""; // empty the container

		// 1. Insert new <a> and assign the new function
		// 2. Change the icon
		// 3. Change the button text
		// 4. Onclick - Reload the page
		col2btn3.innerHTML =
			'<a href="#" data-toggle="modal" id="BackBtnA"' +
			'<i id="BackBtnIcon" class="fa fa-xing-square"></i>' +
			'<p id="randomID">Back</p>' +
			'</a>';

		// reload on click
		document.getElementById("BackBtnA").setAttribute('href', window.location.href);
	}
}

function fetchVideoByGenre(x){
	// THIS SHOULD LOAD A DYNAMIC MODAL BASED ON THE GENRE

	// Placeholder below
	document.getElementById("ModalVideo1").setAttribute("href", "#video-modal");
	document.getElementById("ModalVideo2").setAttribute("href", "#video-modal");
	document.getElementById("ModalVideo3").setAttribute("href", "#video-modal");
	document.getElementById("ModalVideo4").setAttribute("href", "#video-modal");
	document.getElementById("ModalVideo5").setAttribute("href", "#video-modal");
}

