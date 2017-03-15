// functions to change the text of the buttons

var selector = 0;  // used to control what callback to attach

function loadMe(){
    selector = 0;  // reset the var
}

function displMusic(){
    if(selector == 0) {
        // fetch the elements
        var element_top = document.getElementById("menu_img_top");
        var element_lft = document.getElementById("menu_img_left");
        var element_rgt = document.getElementById("menu_img_right");

        // change the img
        element_top.src = "menu/MUSIC/house.png";
        element_lft.src = "menu/MUSIC/pop.png";
        element_rgt.src = "menu/MUSIC/rock.png";

        // update the control
        selector = 1;
    }else if(selector == 1){
        // ~~ Load the secondary options

        fetchMusic();

        // update the control
        selector += 1;
    }else{
        // ~~ Load the content
        var el = document.getElementById("listen_btn");

        el.innerHTML = '<p>Hello There</p>';
    }
}

function displMovie(){
    if(selector == 0){
        // fetch the elements
        var element_top = document.getElementById("menu_img_top");
        var element_lft = document.getElementById("menu_img_left");
        var element_rgt = document.getElementById("menu_img_right");

        // change the img
        element_top.src = "menu/MOVIES/comedy.png";
        element_lft.src = "menu/MOVIES/horror.png";
        element_rgt.src = "menu/MOVIES/sci-fi.png";

        // update the control
        selector = 1;
    }else if(selector == 1){
        // ~~ Load the secondary options

        fetchMovie();

        // update the control
        selector += 1;
    }else{
        // ~~ Load the content
    }
}

function displBooks(){
    if(selector == 0){
        // fetch the elements
        var element_top = document.getElementById("menu_img_top");
        var element_lft = document.getElementById("menu_img_left");
        var element_rgt = document.getElementById("menu_img_right");

        // change the img
        element_top.src = "menu/BOOKS/drama.png";
        element_lft.src = "menu/BOOKS/fantasy.png";
        element_rgt.src = "menu/BOOKS/poetry.png";

        // update the control
        selector = 1;
    }else if(selector == 1){
        // ~~ Load the secondary options

        fetchBooks();

        // update the control
        selector += 1;
    }else{
        // ~~ Load the content
    }
}

// ~~~ ~~~ ~~~ ~~~ ~~~

// functions to display the content

function fetchMusic(){
    // fetch the elements
    var element_top = document.getElementById("menu_img_top");
    var element_lft = document.getElementById("menu_img_left");
    var element_rgt = document.getElementById("menu_img_right");

    // change the img
    element_top.src = "menu/main/empty.png";
    element_lft.src = "menu/main/empty.png";
    element_rgt.src = "menu/main/empty.png";
}

function fetchMovie(){
    // fetch the elements
    var element_top = document.getElementById("menu_img_top");
    var element_lft = document.getElementById("menu_img_left");
    var element_rgt = document.getElementById("menu_img_right");

    // change the img
    element_top.src = "menu/main/empty.png";
    element_lft.src = "menu/main/empty.png";
    element_rgt.src = "menu/main/empty.png";
}

function fetchBooks(){
    // fetch the elements
    var element_top = document.getElementById("menu_img_top");
    var element_lft = document.getElementById("menu_img_left");
    var element_rgt = document.getElementById("menu_img_right");

    // change the img
    element_top.src = "menu/main/empty.png";
    element_lft.src = "menu/main/empty.png";
    element_rgt.src = "menu/main/empty.png";
}