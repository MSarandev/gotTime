// Global Defs
var sheetCount = document.styleSheets.length;
var lastSheet = document.styleSheets[sheetCount-1];
var ruleCount;

// fetch the CSS sheets
if (lastSheet.cssRules) { // Firefox uses 'cssRules'
    ruleCount = lastSheet.cssRules.length;
}
else if (lastSheet.rules) {
    ruleCount = lastSheet.rules.length;
}


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
    var new_top = '<img class="MENU_IMG" id="thr_img_top" onclick="fetchPlayback(1)" src="menu/main/content_play.png"/>';
    var new_lft = '<img class="MENU_IMG" id="thr_img_lft" onclick="fetchPlayback(2)" src="menu/main/content_play.png"/>';
    var new_rgt = '<img class="MENU_IMG" id="thr_img_rgt" onclick="fetchPlayback(3)" src="menu/main/content_play.png"/>';

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
    var new_top = '<img class="MENU_IMG" id="thr_img_top" onclick="fetchBooks(1)" src="menu/main/content_read.png"/>';
    var new_lft = '<img class="MENU_IMG" id="thr_img_lft" onclick="fetchBooks(2)" src="menu/main/content_read.png"/>';
    var new_rgt = '<img class="MENU_IMG" id="thr_img_rgt" onclick="fetchBooks(3)" src="menu/main/content_read.png"/>';

    // add the new elements
    el_top.innerHTML = new_top;
    el_lft.innerHTML = new_lft;
    el_rgt.innerHTML = new_rgt;
}
// ~~~

// ~~~ GENERATE THE EXAMPLE CONTENT
// fetchPlayback && fetchBooks

// ~~~

function fetchPlayback(x){
    // content selection
    if(x==1){
        // animate + display content
        // ----
        // Top
        // ~~~

        // Fetch the elements
        var el = document.getElementById("watch_btn");

        // remove the image
        el.innerHTML = "";

        // draw a border
        el.style.border = "6px solid #fff";

        // Expand left/right
        el.style.minWidth = "100%";
        // access the top level cont and adjust there
        document.getElementById("sub_top_cont").style.width = "100%";

        // Expand top/btm
        el.style.minHeight = "400px";
        el.style.zIndex = "10"; // set on-top
        document.getElementById("sub_mid_cont").style.zIndex = "-1"; // force to back
        document.getElementById("sub_btm_cont").style.zIndex = "-1"; // force to back

        // remove the animation trigger
        $( document ).ready(function() {

            // remove the ":hover"
            $("#watch_btn").css("-webkit-animation", "none");
            $("#watch_btn").css("-moz-animation", "none");
            $("#watch_btn").css("-ms-animation", "none");
            $("#watch_btn").css("animation", "none");

        });

        // push the content
        el.innerHTML = '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/C0DPdy98e4c" frameborder="0" allowfullscreen></iframe>';

    }else if(x==2){
        // animate + display content
        // ----
        // Left

        // Fetch the elements
        var el = document.getElementById("listen_btn");

        // remove the image
        el.innerHTML = "";

        // draw a border
        el.style.border = "6px solid #fff";

        // Expand left/right
        el.style.minWidth = "100%";
        // access the top level cont and adjust there
        document.getElementById("sub_mid_cont").style.minWidth = "100%";
        document.getElementById("sub_mid_left").style.minWidth = "100%";

        // remove the other btn
        document.getElementById("sub_mid_right").innerHTML = "";

        // Expand top/btm
        el.style.minHeight = "400px";
        el.style.zIndex = "10"; // set on-top
        document.getElementById("sub_top_cont").style.zIndex = "-1"; // force to back
        document.getElementById("sub_btm_cont").style.zIndex = "-1"; // force to back

        // remove the animation trigger
        $( document ).ready(function() {

            // remove the ":hover"
            $("#listen_btn").css("-webkit-animation", "none");
            $("#listen_btn").css("-moz-animation", "none");
            $("#listen_btn").css("-ms-animation", "none");
            $("#listen_btn").css("animation", "none");

        });

        // push the content
        el.innerHTML = '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/C0DPdy98e4c" frameborder="0" allowfullscreen></iframe>';

    }else if(x==3){
        // animate + display content
        // ----
        // Right

        // Fetch the elements
        var el = document.getElementById("read_btn");

        // remove the image
        el.innerHTML = "";

        // draw a border
        el.style.border = "6px solid #fff";

        // Expand left/right
        el.style.minWidth = "100%";
        // access the top level cont and adjust there
        document.getElementById("sub_mid_cont").style.minWidth = "100%";
        document.getElementById("sub_mid_right").style.minWidth = "100%";

        // remove the other btn
        document.getElementById("sub_mid_left").innerHTML = "";

        // Expand top/btm
        el.style.minHeight = "400px";
        el.style.zIndex = "10"; // set on-top
        document.getElementById("sub_top_cont").style.zIndex = "-1"; // force to back
        document.getElementById("sub_btm_cont").style.zIndex = "-1"; // force to back

        // remove the animation trigger
        $( document ).ready(function() {

            // remove the ":hover"
            $("#read_btn").css("-webkit-animation", "none");
            $("#read_btn").css("-moz-animation", "none");
            $("#read_btn").css("-ms-animation", "none");
            $("#read_btn").css("animation", "none");

        });

        // push the content
        el.innerHTML = '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/C0DPdy98e4c" frameborder="0" allowfullscreen></iframe>';

    }
}

function fetchBooks(x){
    // content selection
    if(x==1){
        // animate + display content
        // ----
        // Top
        // ~~~

        // Fetch the elements
        var el = document.getElementById("watch_btn");

        // remove the image
        el.innerHTML = "";

        // draw a border
        el.style.border = "6px solid #fff";

        // Expand left/right
        el.style.minWidth = "100%";
        // access the top level cont and adjust there
        document.getElementById("sub_top_cont").style.width = "100%";

        // Expand top/btm
        el.style.minHeight = "400px";
        el.style.zIndex = "10"; // set on-top
        document.getElementById("sub_mid_cont").style.zIndex = "-1"; // force to back
        document.getElementById("sub_btm_cont").style.zIndex = "-1"; // force to back

        // remove the animation trigger
        $( document ).ready(function() {

            // remove the ":hover"
            $("#watch_btn").css("-webkit-animation", "none");
            $("#watch_btn").css("-moz-animation", "none");
            $("#watch_btn").css("-ms-animation", "none");
            $("#watch_btn").css("animation", "none");

        });

        // push the content
        el.innerHTML = '<iframe width="100%" height="300px" src="http://www.lipsum.com/feed/html" frameborder="0" allowfullscreen></iframe>';

    }else if(x==2){
        // animate + display content
        // ----
        // Left

        // Fetch the elements
        var el = document.getElementById("listen_btn");

        // remove the image
        el.innerHTML = "";

        // draw a border
        el.style.border = "6px solid #fff";

        // Expand left/right
        el.style.minWidth = "100%";
        // access the top level cont and adjust there
        document.getElementById("sub_mid_cont").style.minWidth = "100%";
        document.getElementById("sub_mid_left").style.minWidth = "100%";

        // remove the other btn
        document.getElementById("sub_mid_right").innerHTML = "";

        // Expand top/btm
        el.style.minHeight = "400px";
        el.style.zIndex = "10"; // set on-top
        document.getElementById("sub_top_cont").style.zIndex = "-1"; // force to back
        document.getElementById("sub_btm_cont").style.zIndex = "-1"; // force to back

        // remove the animation trigger
        $( document ).ready(function() {

            // remove the ":hover"
            $("#listen_btn").css("-webkit-animation", "none");
            $("#listen_btn").css("-moz-animation", "none");
            $("#listen_btn").css("-ms-animation", "none");
            $("#listen_btn").css("animation", "none");

        });

        // push the content
        el.innerHTML = '<iframe width="100%" height="300px" src="https://www.goodreads.com/book/show/29939266-to-catch-a-killer" frameborder="0" allowfullscreen></iframe>';

    }else if(x==3){
        // animate + display content
        // ----
        // Right

        // Fetch the elements
        var el = document.getElementById("read_btn");

        // remove the image
        el.innerHTML = "";

        // draw a border
        el.style.border = "6px solid #fff";

        // Expand left/right
        el.style.minWidth = "100%";
        // access the top level cont and adjust there
        document.getElementById("sub_mid_cont").style.minWidth = "100%";
        document.getElementById("sub_mid_right").style.minWidth = "100%";

        // remove the other btn
        document.getElementById("sub_mid_left").innerHTML = "";

        // Expand top/btm
        el.style.minHeight = "400px";
        el.style.zIndex = "10"; // set on-top
        document.getElementById("sub_top_cont").style.zIndex = "-1"; // force to back
        document.getElementById("sub_btm_cont").style.zIndex = "-1"; // force to back

        // remove the animation trigger
        $( document ).ready(function() {

            // remove the ":hover"
            $("#read_btn").css("-webkit-animation", "none");
            $("#read_btn").css("-moz-animation", "none");
            $("#read_btn").css("-ms-animation", "none");
            $("#read_btn").css("animation", "none");

        });

        // push the content
        el.innerHTML = '<iframe width="100%" height="300px" src="http://www.lipsum.com/feed/html" frameborder="0" allowfullscreen></iframe>';

    }
}