//Deezer API specific functions for gotTime webapp
//Vladimir R. - 1606883@rgu.ac.uk
//21/4/2017



//TL;DR -- Getting song from Deezer: Genre -> Artist -> Album -> Song
//for querying deezer, ive decided to use three similar functions, that run in one succession
//first function gets list of artists of given genre and chooses one
//second function gets list of albums of given artist and chooses one
//third function gets list of tracks of given album and chooses one, that later is put into html as iframe

//need to use JSONP or will get No 'Access-Control-Allow-Origin' error
function getDeezerSongByGenre(genreID){
	// Using YQL and JSONP
	$.ajax({
		//build url for the request
		//need to add '&output=jsonp&callback=JSONP_CALLBACK' bit at the end or will get Unexpected token error
		url: "http://api.deezer.com/genre/" + genreID + "/artists&output=jsonp&callback=JSONP_CALLBACK",
		// the name of the callback parameter, as specified by the YQL service
		jsonp: "callback",
		// tell jQuery we're expecting JSONP
		dataType: "jsonp",
		// tell YQL what we want and that we want JSON
		data: {format: "json"},

		// work with the response
		success: function(response) {
			//console output - FOR TESTING - display all artists of selected genre
			// for (var i=0; i<response.data.length; i++){
			// console.log("Artist: " + response.data[i].name + ", ID: " + response.data[i].id);
			// }
			//selecting one artist
			var generated = Math.floor(Math.random() * response.data.length);
			//console output - FOR TESTING - display selected artist
			console.log("Artist: " + response.data[generated].name + ", ID: " + response.data[generated].id);
			getDeezerSongByArtist(response.data[generated].id);
		} //parameter success end
	}); //ajax end
} //function getDeezerSongByGenre end

function getDeezerSongByArtist(artistID) {
	$.ajax({
		url: "http://api.deezer.com/artist/" + artistID + "/albums&output=jsonp&callback=JSONP_CALLBACK",
		jsonp: "callback",
		dataType: "jsonp",
		data: {format: "json"},
		success: function(response) {
			// for (var i=0; i<response.data.length; i++){
			// console.log("Album: " + response.data[i].title + ", ID: " + response.data[i].id);
			// }
			var generated = Math.floor(Math.random() * response.data.length);
			console.log("Album: " + response.data[generated].title + ", ID: " + response.data[generated].id);
			getDeezerSongByAlbum(response.data[generated].id);
		} //parameter success end
	}); //ajax end
} //function getDeezerSongByArtist end

function getDeezerSongByAlbum(albumID) {
	$.ajax({
		url: "http://api.deezer.com/album/" + albumID + "/tracks&output=jsonp&callback=JSONP_CALLBACK",
		jsonp: "callback",
		dataType: "jsonp",
		data: {format: "json"},
		success: function(response) {
			// for (var i=0; i<response.data.length; i++){
			// console.log("Song: " + response.data[i].title + ", ID: " + response.data[i].id);
			// }
			var generated = Math.floor(Math.random() * response.data.length);
			console.log("Track: " + response.data[generated].title + ", ID: " + response.data[generated].id);
			outputDeezerSong(response.data[generated].id);
		} //parameter success end
	}); //ajax end
} //function getDeezerSongByAlbum end

//displaying iframe with selected song - iframe paramters can be tweaked
function outputDeezerSong(songID){
	document.getElementById('generatedResult').innerHTML = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=300&height=300&color=e0d818&layout=dark&size=medium&type=tracks&id=' + songID + '&app_id=1" width="300" height="300"></iframe>';
	//getting song details to print out on page
	$.ajax({
		url: "http://api.deezer.com/track/" + songID + "&output=jsonp&callback=JSONP_CALLBACK",
		jsonp: "callback",
		dataType: "jsonp",
		data: {format: "json"},
		success: function(response) {
			//console.log("Track ID: " + response.id);
			document.getElementById('generatedResult').innerHTML += '<br><b><p>Artist: </b>' + response.artist.name + '</p>';
			document.getElementById('generatedResult').innerHTML += '<b><p>Album: </b>' + response.album.title + '</p>';
			document.getElementById('generatedResult').innerHTML += '<b><p>Track: </b>' + response.title + '</p>';
		} //parameter success end
	}); //ajax end
}
