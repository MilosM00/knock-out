"use strict";


const diceOne = document.querySelector(`.dice-one`);
const diceTwo = document.querySelector(`.dice-two`);
const diceThree = document.querySelector(`.dice-three`);
const diceFour = document.querySelector(`.dice-four`);
const scorePlayerOne = document.querySelector(`.score-player1`);
const scorePlayerTwo = document.querySelector(`.score-player2`);
const diceScorePlayerOne = document.querySelector(`.dice-score-player1`);
const diceScorePlayerTwo = document.querySelector(`.dice-score-player2`);
const buttonRollDicePlayerOne = document.querySelector(`.roll-dice-player1`);
const buttonRollDicePlayerTwo = document.querySelector(`.roll-dice-player2`);
const buttonPlayAgaing = document.querySelector(`.play-again`);
const buttonNewGame = document.querySelector(`.new-game`);
const dipsplayWinner = document.querySelector(`.winner`);
const playerOne = document.querySelector(`.player-one`);
const playerTwo = document.querySelector(`.player-two`);


let x = 0;
let y = 0;
let z = 0;
let q = 0;
let playing = true;
let whoPlays = true;

buttonRollDicePlayerOne.addEventListener(`click`, () =>{

    setTimeout(() => {
        
        if(playing === true && whoPlays === true){

            diceOne.textContent = (Math.trunc(Math.random() * 6) + 1); 
            diceTwo.textContent = (Math.trunc(Math.random() * 6) + 1);
            
            if(Number(diceOne.textContent) + Number(diceTwo.textContent) === 7){
                x = 0;
                diceScorePlayerOne.textContent = x;
            }
    
            else{
                x += Number(diceOne.textContent) + Number(diceTwo.textContent);
                diceScorePlayerOne.textContent = x;
    
                if(x >= 30){
                    dipsplayWinner.textContent = `Player 1 Wins!`;
                    z++;
                    scorePlayerOne.textContent = z;
                    playing = false;
                }
            }

            whoPlays = !whoPlays;
            playerTwo.textContent = `✔`;
            playerOne.textContent = ``;

        }

    }, 500);

});

buttonRollDicePlayerTwo.addEventListener(`click`, () =>{

    setTimeout(() => {

        if(playing === true && whoPlays === false){

            diceThree.textContent = (Math.trunc(Math.random() * 6) + 1);
            diceFour.textContent = (Math.trunc(Math.random() * 6) + 1);
    
            if(Number(diceThree.textContent) + Number(diceFour.textContent) === 7){
                y = 0;
                diceScorePlayerTwo.textContent = y;
            }
    
            else{
                y += Number(diceThree.textContent) + Number(diceFour.textContent);
                diceScorePlayerTwo.textContent = y;
    
                if(y >= 30){
                    dipsplayWinner.textContent = `Player 2 Wins!`;
                    q++;
                    scorePlayerTwo.textContent = q;
                    playing = false;
                }
            }

            whoPlays = !whoPlays;
            playerOne.textContent = `✔`;
            playerTwo.textContent = ``;

        }


    }, 500);

});

buttonPlayAgaing.addEventListener(`click`, () =>{

    x = 0;
    y = 0;
    diceScorePlayerOne.textContent = x;
    diceScorePlayerTwo.textContent = y;
    diceOne.textContent = `◆`;
    diceTwo.textContent = `◆`;
    diceThree.textContent = `◆`;
    diceFour.textContent = `◆`;
    dipsplayWinner.textContent = `Who Will Win?`;
    playing = true;
    whoPlays = true;
    playerOne.textContent = `✔`;
    playerTwo.textContent = ``;
    
});

buttonNewGame.addEventListener(`click`, () =>{
    
    x = 0;
    y = 0;
    z = 0;
    q = 0;
    diceScorePlayerOne.textContent = x;
    diceScorePlayerTwo.textContent = y;
    scorePlayerOne.textContent = z;
    scorePlayerTwo.textContent = q;
    diceOne.textContent = `◆`;
    diceTwo.textContent = `◆`;
    diceThree.textContent = `◆`;
    diceFour.textContent = `◆`;
    dipsplayWinner.textContent = `Who Will Win?`;
    playing = true;
    whoPlays = true;
    playerOne.textContent = `✔`;
    playerTwo.textContent = ``;
    
});
