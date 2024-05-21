let index = 0;
let isAccessAlowed = true;
let playerOneMoves= [];
let playerTwoMoves = [];

const firstRow = [0,1,2];
const secondRow = [3,4,5];
const thirdRow = [6,7,8];

const firstColumn = [0,3,6];
const secondColumn = [1,4,7];
const thirdColumn = [2,5,8];

const rightCross = [0,4,8];
const leftCross = [2,4,6 ]

 
text = document.querySelector("#text")
button1 = document.querySelector("#button1");
button2 = document.querySelector("#button2");
winner = document.querySelector("#winner");
table = document.querySelector("table");

button1.onclick = startGame;

text.innerText = "Welcome!"




function playerInvalidMove() {
    if (index % 2 == 0 && isAccessAlowed == true && index != 0)
    {
        text.innerHTML = "Player X Made Invalid Move";
    }
    else if (index % 2 == 0 && isAccessAlowed == true && index != 0) {
        text.innerHTML = "Player X Made Invalid Move"
    }
}

function playerMove() {
    if (isAccessAlowed)
    {
        for (let i = 0; i < 9; i++)
        {
            if (document.getElementById(`square${i}`) == this && 
            index % 2 == 0)
            {
                text.innerHTML = "Player O Turn"
                this.innerText = "X"
                playerOneMoves.push(i);
                checkResult();
                index++;
            }
            else if (document.getElementById(`square${i}`) == this &&
                    index % 2 != 0)
            {
                text.innerHTML = "Player X Turn"
                this.innerText = "O";
                playerTwoMoves.push(i);
                checkResult();
                index++;
            }
        }
        this.onclick = playerInvalidMove;
    }
}

function checkResult() {
    
    if (firstRow.every(num => playerOneMoves.includes(num)) ||
        firstRow.every(num => playerTwoMoves.includes(num))) 
    {
        if (index % 2 == 0)
        {
            text.innerText = "Player X Wins!"
            isAccessAlowed = false;
        }
        else
        {
            text.innerText = "Player O Wins!"
            isAccessAlowed = false;
        }
    }
    else if (secondRow.every(num => playerOneMoves.includes(num)) ||
        secondRow.every(num => playerTwoMoves.includes(num))) 
    {
        if (index % 2 == 0)
        {
            text.innerText = "Player X Wins!"
            isAccessAlowed = false;
        }
        else
        {
            text.innerText = "Player O Wins!"
            isAccessAlowed = false;
        }
    }
    else if (thirdRow.every(num => playerOneMoves.includes(num)) ||
            thirdRow.every(num => playerTwoMoves.includes(num))) 
    {
        if (index % 2 == 0)
        {
            text.innerText = "Player X Wins!"
            isAccessAlowed = false;
        }
        else
        {
            text.innerText = "Player O Wins!"
            isAccessAlowed = false;
        }
    }
    else if (firstColumn.every(num => playerOneMoves.includes(num)) ||
            firstColumn.every(num => playerTwoMoves.includes(num))) 
    {
        if (index % 2 == 0)
        {
            text.innerText = "Player X Wins!"
            isAccessAlowed = false;
        }
        else
        {
            text.innerText = "Player O Wins!"
            isAccessAlowed = false;
        }
    }
    else if (secondColumn.every(num => playerOneMoves.includes(num)) ||
            secondColumn.every(num => playerTwoMoves.includes(num))) 
    {
        if (index % 2 == 0)
        {
            text.innerText = "Player X Wins!"
            isAccessAlowed = false;
        }
        else
        {
            text.innerText = "Player O Wins!"
            isAccessAlowed = false;
        }
    }
    else if (thirdColumn.every(num => playerOneMoves.includes(num)) ||
            thirdColumn.every(num => playerTwoMoves.includes(num))) 
    {
        if (index % 2 == 0)
        {
            text.innerText = "Player X Wins!"
            isAccessAlowed = false;
        }
        else
        {
            text.innerText = "Player O Wins!"
            isAccessAlowed = false;
        }
    }
    else if (rightCross.every(num => playerOneMoves.includes(num)) ||
            rightCross.every(num => playerTwoMoves.includes(num))) 
    {
        if (index % 2 == 0)
        {
            text.innerText = "Player X Wins!"
            isAccessAlowed = false;
        }
        else
        {
            text.innerText = "Player O Wins!"
            isAccessAlowed = false;
        }
    }
    else if (leftCross.every(num => playerOneMoves.includes(num)) ||
            leftCross.every(num => playerTwoMoves.includes(num))) 
    {
        if (index % 2 == 0)
        {
            text.innerText = "Player X Wins!"
            isAccessAlowed = false;
        }
        else
        {
            text.innerText = "Player O Wins!"
            isAccessAlowed = false;
        }
    }
    if (index == 9 && playerOneMoves.length == 5 && isAccessAlowed == true)
    {
        text.innerText = "Draw"
        isAccessAlowed = false;
    }
}

function startGame() {
    for (let i = 0; i < 9; i++)
    {
        document.getElementById(`square${i}`).innerText = "";
    }

    for (let i =0; i < 9; i++)
    {
        document.getElementById(`square${i}`).onclick = playerMove;
    }
    text.innerText = "Player X Turn";
    resetGame();
    isAccessAlowed = true;
}

function resetGame()
{
    playerOnePoints = 0;
    playerTwoPoints = 0;
    index = 0;
    playerOneMoves = [];
    playerTwoMoves = [];
}