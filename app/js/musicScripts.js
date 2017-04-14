//Different functions for gotTime webapp - functions include randomly choosing different genres/artists/albums/tracks with ultimate goal of outputting html iframe with generated song; konami code;
//Vladimir R. - 1606883@rgu.ac.uk
//13/4/2017

//array containing all music genres - could be taken as json from api, but for sake of project's overall simplicity it's stored locally (deezer has around 150-200 of them)
//deezerID - id number of a music genre in deezer system, used to generate list of deezer artists
var musicGenres = [
	{name:"Pop", deezerID:"132"},
	{name:"Rap/Hip Hop", deezerID:"116"},
	{name:"Rock", deezerID:"152"},
	{name:"Dance", deezerID:"113"},
	{name:"R&B", deezerID:"165"},
	{name:"Alternative", deezerID:"85"},
	{name:"Electro", deezerID:"106"},
	{name:"Folk", deezerID:"466"},
	{name:"Reggae", deezerID:"144"},
	{name:"Jazz", deezerID:"129"},
	{name:"Country", deezerID:"84"},
	{name:"Classical", deezerID:"98"},
	{name:"Films/Games", deezerID:"173"},
	{name:"Metal", deezerID:"464"},
	{name:"Soul & Funk", deezerID:"169"},
	{name:"African Music", deezerID:"2"},
	{name:"Asian Music", deezerID:"16"},
	{name:"Blues", deezerID:"153"},
	{name:"Brazilian Music", deezerID:"75"},
	{name:"Indian Music", deezerID:"81"},
	{name:"Kids", deezerID:"95"},
	{name:"Latin Music", deezerID:"197"},	
];

//array containing few randomly chosen genres
var selectedMusicGenres = [];

//function that selects X random genres from musicGenres and adds them to selectedMusicGenres array
function pickMusicGenres(x){
	//amount - holds number of genres to be chosen
	//generated - holds musicGenres array item number of a generated genre
	var amount = x;
	var generated;
	//clearing array in case of repeated use
	selectedMusicGenres = [];
	//loop runs until X amount of genres is added to selectedMusicGenres array
	while (selectedMusicGenres.length < x) {
		//generating random number - from 0 to 21 (range of all genres)
		generated = Math.floor(Math.random() * musicGenres.length);
		//checking whether generated genre is already added to array - ensures of not having duplicates
		if ((selectedMusicGenres.includes(musicGenres[generated])) != true) {
			//genre has not been added - adding to array
			selectedMusicGenres.push(musicGenres[generated]);
		}
	}
}

//changing button labels to selected genres - used upon page load - USED ONLY IN WORKING TEMPLATE - TO BE REMOVED/CHANGED
function setButtons(){
	document.getElementById("b1").innerHTML = selectedMusicGenres[0].name;
	document.getElementById("b2").innerHTML = selectedMusicGenres[1].name;
	document.getElementById("b3").innerHTML = selectedMusicGenres[2].name;
	//displaying all selected genres - USED FOR TESTING - TO BE REMOVED
	//document.getElementById("test1").innerHTML += "Selected genres: " + selectedMusicGenres.toString();
}

//function that runs upon button click - has not much use if only one api is used - ATM can be replaced by using getDeezerArtists(g)
function outputSongByGenre(g){
	if (g.deezerID != "") {
		//string output - FOR TESTING - CAN BE REMOVED
		//document.getElementById("main").innerHTML += "<br>" + g.name + ", Deezer ID: " + g.deezerID;
		getDeezerArtists(g);
	} else {
		//document.getElementById('main').innerHTML+='<br>' + g.name + ' has no Deezer ID assigned';
	}
}

//for querying deezer, ive decided to use three similar functions (they seem easy to optimize into one function with extra parameters but that might be somewhat tricky), that run in one succession
//first function gets list of artists of given genre and chooses one
//second function gets list of albums of given artist and chooses one
//third function gets list of tracks of given album and chooses one, that later is put into html as iframe
//ive left some output as comments in case of need in future

//need to use JSONP or will get No 'Access-Control-Allow-Origin' error
function getDeezerArtists(g){
	// Using YQL and JSONP
	$.ajax({
		//build url for the request
		//need to add '&output=jsonp&callback=JSONP_CALLBACK' bit at the end or will get Unexpected token error
		url: "http://api.deezer.com/genre/" + g.deezerID + "/artists&output=jsonp&callback=JSONP_CALLBACK",
		// the name of the callback parameter, as specified by the YQL service
		jsonp: "callback",
		// tell jQuery we're expecting JSONP
		dataType: "jsonp",
		// tell YQL what we want and that we want JSON
		data: {format: "json"},

		// work with the response
		success: function(response) {
			// //create a string to contain our HTML code to inject - FOR TESTING - CAN BE REMOVED
			// var htmlstring = "";
			// for (var i=0; i<response.data.length; i++){
				// htmlstring += "<br>" + response.data[i].name + ", ID: " + response.data[i].id;
			// }
			// //display all artists of selected genre
			// document.getElementById('result').innerHTML ='<br>' + htmlstring;
			
			//selecting one artist
			var generated = Math.floor(Math.random() * response.data.length);
			//string output - FOR TESTING - CAN BE REMOVED
			//document.getElementById('main').innerHTML += '<br>Artist: ' + response.data[generated].name + ", ID: " + response.data[generated].id;
			getDeezerAlbums(response.data[generated].id);
		} //parameter success end
	}); //ajax end
} //function getDeezerArtists end

function getDeezerAlbums(artistID) {
	$.ajax({
		url: "http://api.deezer.com/artist/" + artistID + "/albums&output=jsonp&callback=JSONP_CALLBACK",
		jsonp: "callback",
		dataType: "jsonp",
		data: {format: "json"},
		success: function(response) {
			// var htmlstring = "";
			// for (var i=0; i<response.data.length; i++){
				// htmlstring += "<br>" + response.data[i].title + ", ID: " + response.data[i].id;
			// }
			// document.getElementById('result').innerHTML +='<br>' + htmlstring;
			var generated = Math.floor(Math.random() * response.data.length);
			//document.getElementById('main').innerHTML += '<br>Album: ' + response.data[generated].title + ", ID: " + response.data[generated].id;
			getDeezerSongs(response.data[generated].id);
		} //parameter success end
	}); //ajax end
} //function getDeezerAlbums end

function getDeezerSongs(albumID) {
	$.ajax({
		url: "http://api.deezer.com/album/" + albumID + "/tracks&output=jsonp&callback=JSONP_CALLBACK",
		jsonp: "callback",
		dataType: "jsonp",
		data: {format: "json"},
		success: function(response) {
			// var htmlstring = "";
			// for (var i=0; i<response.data.length; i++){
				// htmlstring += "<br>" + response.data[i].title + ", ID: " + response.data[i].id;
			// }
			// document.getElementById('result').innerHTML +='<br>' + htmlstring;
			var generated = Math.floor(Math.random() * response.data.length);
			//document.getElementById('main').innerHTML += '<br>Track: ' + response.data[generated].title + ", ID: " + response.data[generated].id;
			outputDeezerSong(response.data[generated].id);
		} //parameter success end
	}); //ajax end
} //function getDeezerSongs end

//displaying iframe with selected song - iframe paramters can be tweaked
function outputDeezerSong(songID){
	document.getElementById('generatedResult').innerHTML = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=300&height=300&color=e0d818&layout=dark&size=medium&type=tracks&id=' + songID + '&app_id=1" width="300" height="300"></iframe>';
}

//function for executing konami code on page
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

		//FOR TESTING - CAN BE REMOVED
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
			$("body").html("<img src='http://www.newyorker.com/wp-content/uploads/2008/04/080414_r17095_p646-320.jpg' height='300'>" +
			"<br><h1>Ilja Magdenko</h1><br><p>Desing By Ilja. and bla bla bla..</p>");
			$('img').animate({'height':'1000', 'align':'middle'}, 50000);
			enteredCode = [];
		}
	});//key press actions end
}