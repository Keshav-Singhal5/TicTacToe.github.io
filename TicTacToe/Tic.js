console.log("Welcome to MyTicTacToe Game");
let turn = "X";
let gameover = false;
let boom=new Audio('gamewin.wav')
let ting= new Audio('ting.txt')

const changeTurn=()=> {
    return turn === "X" ? "0" : "X";
}
//Check for Win
const checkWin =()=> {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach((e) => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== "") {
            document.querySelector('.turntext').innerText =
                boxtext[e[0]].innerText + " WON!";
                gameover = true;
boom.play();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
        }
        
    });
}
// Game logic!
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if(!gameover){
        document.getElementsByClassName("turntext")[0].innerText =
          "Turn for " + turn;
      }
    }
  })
})
// button reset
button.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    gameover = false
    
    document.getElementsByClassName("turntext")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
