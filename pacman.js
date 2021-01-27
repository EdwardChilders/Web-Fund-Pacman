document.addEventListener("DOMContentLoaded", function() {

var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,3,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
    [2,1,2,0,0,2,1,2,0,0,0,2,1,2,2,1,2,0,0,0,2,1,2,0,0,2,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
    [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,1,2,2,1,1,1,1,1,0,1,1,1,1,2,2,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,1,2,2,1,2,0,0,0,0,0,0,2,1,2,2,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,1,1,1,1,2,0,0,0,0,0,0,2,1,1,1,1,2,0,0,0,0,0],
    [0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0]

];

var score = 0;

var pacman = {
    x: 14,
    y: 11
}

var img = document.getElementById('pacman');

function displayWorld() {
    var output = '';

    for (var i=0; i<world.length; i++){
        output += '\n<div class="row">\n';
        for (var j=0; j<world[i].length; j++){
            if (world[i][j] == 2){
                output += '<div class="brick"></div>';
            }else if (world[i][j] == 1){
                output += '<div class="coin"></div>';
            }if (world[i][j] == 0){
                output += '<div class="empty"></div>';
            }else if (world[i][j] == 3){
                output += '<div class="cherry"></div>';
            }
        }
        output += '\n</div>';
    }
    // console.log(output);
    document.getElementById("world").innerHTML = output;
}

function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y*20+"px";
    document.getElementById("pacman").style.left = pacman.x*20+"px";
}

function displayScore() {
    document.getElementById("score").innerHTML = score;
}

displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e){
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
        pacman.x --;
        img.style.transform = 'rotate(360deg)';
    }else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
        pacman.x ++;
        img.style.transform = 'rotate(180deg)';
    }else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
        pacman.y ++;
        img.style.transform = 'rotate(270deg)';
    }else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){
        pacman.y --;
        img.style.transform = 'rotate(90deg)';
    }
    if (world[pacman.y][pacman.x]==1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
    }
    if (world[pacman.y][pacman.x]==3){
        world[pacman.y][pacman.x] = 0;
        score+=50;
    }
    displayWorld();
    displayPacman();
    displayScore();
    console.log(e.keyCode);
}

});