const Player = document.getElementById("player");
const Field = document.querySelector(".maze-field")
let player_coord = {
    'X' : 1,
    'Y' : 8
};
Player.style.left = String(player_coord["X"] * 25) + 'px'
Player.style.top = String(player_coord["Y"] * 25) + 'px'


var maze = [
    '1111111111111111111'.split(''),
    '1000000000010100001'.split(''),
    '1111101111010101001'.split(''),
    '1000001000010100001'.split(''),
    '1011111011110000001'.split(''),
    '1010000010110110001'.split(''),
    '1010111110110100111'.split(''),
    '1010000000000100001'.split(''),
    '1P11111111111110101'.split(''),
    '1010001010001000101'.split(''),
    '1010001000001000111'.split(''),
    '1011100000100000001'.split(''),
    '1000110111111111001'.split(''),
    '1010010000000001101'.split(''),
    '1011011111111101111'.split(''),
    '1010000000000101101'.split(''),
    '1011111111100100001'.split(''),
    '10100010001001111F1'.split(''),
    '1000100010110010001'.split(''),
    '1111111111111111111'.split('')
];

let x = 0
let y = 0
console.log(maze)
for (line of maze) {
    for (cell of line) {
        if (cell == "1") {
            console.log(cell)
            let block = document.createElement("div");
            block.classList.add("maze-block");
            block.style.top = String(y * 25) + 'px';
            block.style.left = String(x * 25) + 'px';
            Field.append(block);
        }
        if (cell == "F") {
            let block = document.createElement("div");
            block.classList.add("finish-block");
            block.style.top = String(y * 25) + 'px';
            block.style.left = String(x * 25) + 'px';
            Field.append(block);
        }
        x += 1;
    }
    y += 1;
    x = 0;
}

document.addEventListener("keydown", (event) => {
    if (event.code == "KeyW") {
        if (maze[player_coord["Y"] - 1][player_coord["X"]] != "1"){
            maze[player_coord["Y"]][player_coord["X"]] = "0";
            player_coord["Y"] -= 1;
            maze[player_coord["Y"]][player_coord["X"]] = "P";
            
        }
        if (maze[player_coord["Y"] + 1][player_coord["X"]] == "F"){
            Player.style.display = "hidden";
        }
    }
    else if (event.code == "KeyS") {
        if (maze[player_coord["Y"] + 1][player_coord["X"]] != "1"){
            maze[player_coord["Y"]][player_coord["X"]] = "0";
            player_coord["Y"] += 1;
            maze[player_coord["Y"]][player_coord["X"]] = "P";
            
        }
        if (maze[player_coord["Y"] - 1][player_coord["X"]] == "F"){
            Player.style.display = "hidden";
        }
    }   
    else if (event.code == "KeyD") {
        if (maze[player_coord["Y"]][player_coord["X"] + 1] != "1"){
            maze[player_coord["Y"]][player_coord["X"]] = "0";
            player_coord["X"] += 1;
            maze[player_coord["Y"]][player_coord["X"]] = "P";
            
        }
        if (maze[player_coord["Y"]][player_coord["X"] + 1] == "F"){
            Player.style.display = "hidden";
        }
    }  
    else if (event.code == "KeyA") {
        if (maze[player_coord["Y"]][player_coord["X"] - 1] != "1"){
            maze[player_coord["Y"]][player_coord["X"]] = "0";
            player_coord["X"] -= 1;
            maze[player_coord["Y"]][player_coord["X"]] = "P";
            
        }
        if (maze[player_coord["Y"]][player_coord["X"] - 1] == "F"){
            Player.style.display = "hidden";
        }
    }  
    Player.style.left = String(player_coord["X"] * 25) + 'px'
    Player.style.top = String(player_coord["Y"] * 25) + 'px';
})