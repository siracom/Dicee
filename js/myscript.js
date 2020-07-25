var player1 = "player1";
var player2 = "player2";
function fetch(){
  player1 = prompt("Enter Player1 Name:");
  player2 = prompt("Enter Player2 Name:");
  if (player1 === null){
    player1 = "player1"
  }
  if (player2 === null){
    player2 = "player2"
  }

}
function roll() {
  var score1 = Math.ceil(6 * Math.random());
  var score2 = Math.ceil(6 * Math.random());

  var url1 = "images/player1/player1-number";
  url1 = url1 + score1 + ".png";

  var url2 = "images/player2/player2-number";
  url2 = url2 + score2 + ".png";

  document.querySelector(".dice-image1").setAttribute("src", url1);
  document.querySelector(".dice-image2").setAttribute("src", url2);
  if (score1 > score2) {
    document.querySelector(".result").innerHTML = '<span class="name">' + player1 + '</span>' + '<i class="result-icon fas fa-heart"></i><span class="result-em"> Wins</span>';
  } else if (score1 < score2) {
    document.querySelector(".result").innerHTML = '<span class="name">' + player2 + '</span>' + '<i class="result-icon fas fa-heart"></i><span class="result-em"> Wins</span>';
  } else {
    document.querySelector(".result").innerHTML = '<span class="name">It\'s a </span><span class="result-em">Draw!!!</span>';
  }

  document.querySelector(".result").style.visibility = "visible";
}
