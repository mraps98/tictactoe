var boxes = document.getElementsByClassName('box');
var turn = document.getElementById('turn');
var marked = [false, false, false, false, false, false, false, false, false];
var win = document.getElementById('win');
var hello = 'O';
var grid = [0,0,0,0,0,0,0,0,0];

function mark(num) {
  if (marked[num] != true) {
    boxes[num].innerHTML = hello;
    marked[num] = true;
    grid[num] = hello;
    //check();
    if (hello == 'O') {
      hello = 'X';
    } else {
      hello = 'O';
    }
    turn.innerHTML = hello;
  } else {

  }
}

/*function check(){
  if (grid[0] == grid[1] && grid[1] == grid[2]){
    win(hello);
  }
  else if(grid[3] == grid[4] && grid[5] == grid[4]){
    win(hello);
  }
  else if(grid[6] == grid[7] && grid[8] == grid[7]){
    win(hello);
  }
  else if(grid[0] == grid[3] && grid[6] == grid[3]){
    win(hello);
  }
  else if(grid[1] == grid[4] && grid[7] == grid[4]){
    win(hello);
  }
  else if(grid[2] == grid[5] && grid[8] == grid[5]){
    win(hello);
  }
  else if(grid[0] == grid[4] && grid[8] == grid[4]){
    win(hello);
  }
  else if(grid[2] == grid[4] && grid[6] == grid[4]){
    win(hello);
  }
  else{

  }
}

function win(player) {
  win.innerHTML = player + " wins";
}
*/
