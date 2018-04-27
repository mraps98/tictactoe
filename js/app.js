$(document).ready(function() {

  var character = 'O';
  var marked = [false, false, false, false, false, false, false, false, false];
  var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var turnCounter = 0;

  $('.box').on('click', function() {
    var num = $(this).attr('data-num');
    if (marked[num] != true) {
      marked[num] = true;
      $(this).html(character);
      grid[num] = character;
      turnCounter++;
      checkWin();
      if (character == 'O') {
        character = 'X';
      } else {
        character = 'O';
      }
      $('#turn').html(character);
      console.log(grid, turnCounter);
    } else {

    }
  });

  $('#reset').on('click', reset);

  function reset() {
    character = 'O';
    marked = [false, false, false, false, false, false, false, false, false];
    grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turnCounter = 0;
    $('.box').html('');
    $('#turn').html(character);
  }

  function checkWin() {
    checkline(grid[0], grid[1], grid[2], character);
    checkline(grid[3], grid[4], grid[5], character);
    checkline(grid[6], grid[7], grid[8], character);
    checkline(grid[0], grid[3], grid[6], character);
    checkline(grid[1], grid[4], grid[7], character);
    checkline(grid[2], grid[5], grid[8], character);
    checkline(grid[0], grid[4], grid[8], character);
    checkline(grid[2], grid[4], grid[6], character);

  }

  function checkline(a, b, c, mark) {
    if (a == mark && b == mark && c == mark) {
      alert(mark + " won");
      reset();
    } else {
      return false;
    }
  }

});
