// functions to change the text of the buttons

var selector_music = 0;  // used to control what callback to attach
var selector_movies = 0; // used to control what callback to attach
var selector_books = 0;  // used to control what callback to attach

function loadMe(){
    selector_music = 0;  // reset the var
    selector_movies = 0; // reset the var
    selector_books = 0; // reset the var
}

function displMusic(){
    // fetch the elements
    var element_top = document.getElementById("menu_img_top");
    var element_lft = document.getElementById("menu_img_left");
    var element_rgt = document.getElementById("menu_img_right");

    // change the img
    element_top.src = "menu/MUSIC/house.png";
    element_lft.src = "menu/MUSIC/pop.png";
    element_rgt.src = "menu/MUSIC/rock.png";

    // update the control
    selector_music = 1;

    // change the btm button
    changeBtn();
}

function displMovie(){
    // fetch the elements
    var element_top = document.getElementById("menu_img_top");
    var element_lft = document.getElementById("menu_img_left");
    var element_rgt = document.getElementById("menu_img_right");

    // change the img
    element_top.src = "menu/MOVIES/comedy.png";
    element_lft.src = "menu/MOVIES/horror.png";
    element_rgt.src = "menu/MOVIES/sci-fi.png";

    // update the control
    selector_movies = 1;
}

function displBooks(){
    // fetch the elements
    var element_top = document.getElementById("menu_img_top");
    var element_lft = document.getElementById("menu_img_left");
    var element_rgt = document.getElementById("menu_img_right");

    // change the img
    element_top.src = "menu/BOOKS/drama.png";
    element_lft.src = "menu/BOOKS/fantasy.png";
    element_rgt.src = "menu/BOOKS/poetry.png";

    // update the control
    selector_books = 1;
}

// ~~~ ~~~ ~~~ ~~~ ~~~

// functions to display the content

function fetchMusic(){

}

function fetchMovie(){

}

function fetchBooks(){

}