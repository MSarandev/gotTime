// functions to change the text of the buttons

function displMusic(){
    // Get the elements
    var el_top = document.getElementById("watch_btn");
    var el_lft = document.getElementById("listen_btn");
    var el_rgt = document.getElementById("read_btn");


    // declare the new content
    var new_top = '<img class="MENU_IMG" id="sec_img_top" onclick="musicGenre(1)" src="menu/MUSIC/house.png"/>';
    var new_lft = '<img class="MENU_IMG" id="sec_img_lft" onclick="musicGenre(2)" src="menu/MUSIC/rock.png"/>';
    var new_rgt = '<img class="MENU_IMG" id="sec_img_rgt" onclick="musicGenre(3)" src="menu/MUSIC/pop.png"/>';

    // add the new elements
    el_top.innerHTML = new_top;
    el_lft.innerHTML = new_lft;

    el_rgt.innerHTML = new_rgt;
}

function displMovie(){
    // Get the elements
    var el_top = document.getElementById("watch_btn");
    var el_lft = document.getElementById("listen_btn");
    var el_rgt = document.getElementById("read_btn");


    // declare the new content
    var new_top = '<img class="MENU_IMG" id="sec_img_top" onclick="moviesGenre(1)" src="menu/MOVIES/comedy.png"/>';
    var new_lft = '<img class="MENU_IMG" id="sec_img_lft" onclick="moviesGenre(2)" src="menu/MOVIES/horror.png"/>';
    var new_rgt = '<img class="MENU_IMG" id="sec_img_rgt" onclick="moviesGenre(3)" src="menu/MOVIES/sci-fi.png"/>';

    // add the new elements
    el_top.innerHTML = new_top;
    el_lft.innerHTML = new_lft;
    el_rgt.innerHTML = new_rgt;
}

function displBooks(){
    // Get the elements
    var el_top = document.getElementById("watch_btn");
    var el_lft = document.getElementById("listen_btn");
    var el_rgt = document.getElementById("read_btn");


    // declare the new content
    var new_top = '<img class="MENU_IMG" id="sec_img_top" onclick="booksGenre(1)" src="menu/BOOKS/drama.png"/>';
    var new_lft = '<img class="MENU_IMG" id="sec_img_lft" onclick="booksGenre(2)" src="menu/BOOKS/fantasy.png"/>';
    var new_rgt = '<img class="MENU_IMG" id="sec_img_rgt" onclick="booksGenre(3)" src="menu/BOOKS/poetry.png"/>';

    // add the new elements
    el_top.innerHTML = new_top;
    el_lft.innerHTML = new_lft;
    el_rgt.innerHTML = new_rgt;
}

// Music function (2nd step)
function musicGenre(x){
    if(x == 1){
        // callback from top
        // ~~~ ~~~ ~~~
        // Load content for the top genre
        loadPlayback();
    }else if(x == 2){
        // callback from left
        // ~~~ ~~~ ~~~
        // Load content for the left genre
        loadPlayback();
    }else if(x == 3){
        // callback from right
        // ~~~ ~~~ ~~~
        // Load content for the right genre
        loadPlayback();
    }
}

// Movies function (2nd step)
function moviesGenre(x){
    if(x == 1){
        // callback from top
        // ~~~ ~~~ ~~~
        // Load content for the top genre
        loadPlayback();
    }else if(x == 2){
        // callback from left
        // ~~~ ~~~ ~~~
        // Load content for the left genre
        loadPlayback();
    }else if(x == 3){
        // callback from right
        // ~~~ ~~~ ~~~
        // Load content for the right genre
        loadPlayback();
    }
}

// Books function (2nd step)
function booksGenre(x){
    if(x == 1){
        // callback from top
        // ~~~ ~~~ ~~~
        // Load content for the top genre
        loadRead();
    }else if(x == 2){
        // callback from left
        // ~~~ ~~~ ~~~
        // Load content for the left genre
        loadRead();
    }else if(x == 3){
        // callback from right
        // ~~~ ~~~ ~~~
        // Load content for the right genre
        loadRead();
    }
}

/*
The function below will be changed !!!
 */

// ~~~ Load "content"
function loadPlayback(){
    // Get the elements
    var el_top = document.getElementById("watch_btn");
    var el_lft = document.getElementById("listen_btn");
    var el_rgt = document.getElementById("read_btn");


    // declare the new content
    var new_top = '<img class="MENU_IMG" id="thr_img_top" onclick="booksGenre(1)" src="menu/main/content_play.png"/>';
    var new_lft = '<img class="MENU_IMG" id="thr_img_lft" onclick="booksGenre(2)" src="menu/main/content_play.png"/>';
    var new_rgt = '<img class="MENU_IMG" id="thr_img_rgt" onclick="booksGenre(3)" src="menu/main/content_play.png"/>';

    // add the new elements
    el_top.innerHTML = new_top;
    el_lft.innerHTML = new_lft;
    el_rgt.innerHTML = new_rgt;
}
function loadRead(){
    // Get the elements
    var el_top = document.getElementById("watch_btn");
    var el_lft = document.getElementById("listen_btn");
    var el_rgt = document.getElementById("read_btn");


    // declare the new content
    var new_top = '<img class="MENU_IMG" id="thr_img_top" onclick="booksGenre(1)" src="menu/main/content_read.png"/>';
    var new_lft = '<img class="MENU_IMG" id="thr_img_lft" onclick="booksGenre(2)" src="menu/main/content_read.png"/>';
    var new_rgt = '<img class="MENU_IMG" id="thr_img_rgt" onclick="booksGenre(3)" src="menu/main/content_read.png"/>';

    // add the new elements
    el_top.innerHTML = new_top;
    el_lft.innerHTML = new_lft;
    el_rgt.innerHTML = new_rgt;
}
// ~~~

// ~~~ GENERATE THE EXAMPLE CONTENT

// ~~~