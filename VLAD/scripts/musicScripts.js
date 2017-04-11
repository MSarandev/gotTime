//Just a simple test - playing playlist of selected genre (Deezer only)
//Vladimir R.
//9/4/2017

//deezerNo - number of a radio(playlist) genre, used for generating iframe
//i have assigned deezer radios only to genres that were present in MIX category of http://developers.deezer.com/musicplugins/player
//array containing all music genres
var musicGenres = [
	{name:"Blues", deezerNo:"30921"},
	{name:"Caribbean", deezerNo:""},
	{name:"Classical", deezerNo:"30661"},
	{name:"Country", deezerNo:"36801"},
	{name:"Dance", deezerNo:"30951"},
	{name:"Disco", deezerNo:"30841"},
	{name:"Easy-listening", deezerNo:""},
	{name:"Electronic", deezerNo:"30621"},
	{name:"Folk", deezerNo:"37091"},
	{name:"Hip-hop", deezerNo:"30991"},
	{name:"House", deezerNo:""},
	{name:"Jazz", deezerNo:"31031"},
	{name:"Latin", deezerNo:"36791"},
	{name:"Metal", deezerNo:"30901"},
	{name:"Pop", deezerNo:"31061"},
	{name:"Reggae", deezerNo:"31091"},
	{name:"RnB", deezerNo:"30881"},
	{name:"Rock", deezerNo:"37765"},
	{name:"Techno", deezerNo:"30851"},
	{name:"Trance", deezerNo:""},
	{name:"World", deezerNo:""},
];

//array containing few randomly chosen genres
var selectedMusicGenres = [];

//function that selects X random genres from musicGenres and adds them to selectedMusicGenres array
function pickMusicGenres(x){
	//amount - holds number of genres to be chosen
	//generated - holds musicGenres array item number of a generated genre
	var amount = x;
	var generated;
	//loop runs until X amount of genres is added to selectedMusicGenres array
	while (selectedMusicGenres.length < x) {
		//generating random number - from 0 to 21 (range of all genres)
		generated = Math.floor(Math.random() * musicGenres.length);
		//checking whether generated genre is already added to array - ensures of not having duplicates
		if ((selectedMusicGenres.includes(musicGenres[generated])) === true) {
			//genre has already been added - displaying msg - USED FOR TESTING - TO BE REMOVED
			document.getElementById('main').innerHTML+='<br>Duplicate found: ' + musicGenres[generated].name;
		} else {
			//genre has not been added - adding to array
			selectedMusicGenres.push(musicGenres[generated]);
		}
	}
}

//changing button labels to selected genres - used upon page load
function setButtons(){
	document.getElementById("b1").innerHTML = selectedMusicGenres[0].name;
	document.getElementById("b2").innerHTML = selectedMusicGenres[1].name;
	document.getElementById("b3").innerHTML = selectedMusicGenres[2].name;
	//displaying all selected genres - USED FOR TESTING - TO BE REMOVED
	//document.getElementById("test1").innerHTML += "Selected genres: " + selectedMusicGenres.toString();
}

function outputDeezer(g){
	document.getElementById('result').innerHTML = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=radio&id=radio-' + g.deezerNo + '&app_id=1" width="700" height="95"></iframe>';
}

//function that runs upon button click - WIP
function outputGenre(g){
	if (g.deezerNo != "") {
		outputDeezer(g);
	} else {
		document.getElementById('main').innerHTML+='<br>' + g.name + ' has no deezer radio assigned';
	}
}

function playDatSong2(){
	// Using YQL and JSONP
	$.ajax({
		url: "http://api.deezer.com/artist/119",
		// the name of the callback parameter, as specified by the YQL service
		jsonp: "callback",
		// tell jQuery we're expecting JSONP
		dataType: "jsonp",
		// tell YQL what we want and that we want JSON
		data: {format: "json"},

		// work with the response
		success: function( response ) {
				//create a string to contain our HTML code to inject
				var htmlstring = "";
				//iterate over the collection of results
				for (var i=0; i<10; i++){
					var title = response.Search[i].name;
					htmlstring += "<li>" + title + "</li>";
				}
		}
	
	//inject the HTML into our empty list
	//$("#result").html("kaka");
	});
}

function playDatSong(){
	//call deezer API using AJAX

		//use jquery json shortcut
		$.getJSON("http://api.deezer.com/artist/119", function(jsondata){
			//handle the results
			addResultTitles(jsondata);
		});
		
}

function addResultTitles(jsondata) {
	//create a string to contain our HTML code to inject
	var htmlstring = "";
	//iterate over the collection of results
	for (var i=0; i<10; i++){
		var title = jsondata.Search[i].name;
		htmlstring += "<li>" + title + "</li>";
	}
	
	//inject the HTML into our empty list
	$("#result").html(htmlstring);
}
