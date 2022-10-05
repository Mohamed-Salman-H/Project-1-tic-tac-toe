
// add a function and make the divs (grid) clickable, depending on the players turn
// link the "play" function to the 9 Id's that we've created in the HTML

// Get all the blocks and the titles from the HTML, define the players turn
//Define the reset button, and add an event listener

let blocks = document.querySelectorAll('.block')

let playerOneTurn = true

let turnDisplay = document.querySelector('.title')

let reset = document.getElementById('resetButton')

reset.addEventListener('click', resetGame)


// add and define the audios

let scorpionSound = new Audio('./scorpion-wins.mp3')
let subzeroSound = new Audio('./Sub-Zero wins.mp3')
let fightSound = new Audio('./Mortal Kombat.mp3')


//add an event listener with a click event to make the blocks clickable

blocks.forEach(div => {
    div.addEventListener('click', play)
})


// add a loop function that gives input to both players, and separate their turns.

function play(event) {
    let fill = document.getElementById(event.target.id);
    
    if (playerOneTurn === true){
        fill.innerHTML = 'X'
        fill.style.color = 'rgb(0, 187, 255)'
        playerOneTurn = false
        deActivate(event)
        turnDisplay.innerText = "Scorpion's turn"
        turnDisplay.style.color = "rgb(255, 68, 0)" 

        
    } else if (playerOneTurn === false) {
        fill.innerHTML = 'O'
        fill.style.color = "rgb(255, 68, 0)" 
        playerOneTurn = true
        deActivate(event)
        turnDisplay.innerText = "Sub-Zero's turn"
        turnDisplay.style.color = 'rgb(0, 187, 255)'
    }
    checkWinner()
}

// add a function to deactivate the click event

function deActivate(event) {
    event.target.removeEventListener('click', play);
}


// Grab the class title to show who wins the Match
function checkWinner() {
    let result = document.querySelector('.title')
    
    
    //  give 8 winning possibilities to X, and add the winner's name in the title with a blue color for Sub-zero and red color for scorpion.
    // remove the event listener to stop the game whenever a player wins.
    // stop the background Audio and start another audio to annouce the winner's name.

    if (item1.innerHTML === 'X' && item2.innerHTML === 'X' && item3.innerHTML === 'X'){
        result.innerText = 'Sub-Zero Wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
       blocks.forEach((block) => block.removeEventListener('click', play));
       subzeroSound.play();
       fightSound.pause();
    }
    else if (item4.innerHTML === 'X' && item5.innerHTML === 'X' && item6.innerHTML === 'X'){
        result.innerText = 'Sub-Zero Wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        subzeroSound.play();
        fightSound.pause();
    }
    else if (item7.innerHTML === 'X' && item8.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero Wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        subzeroSound.play();
        fightSound.pause();
    }
    else if (item3.innerHTML === 'X' && item6.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero Wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        subzeroSound.play();
        fightSound.pause();
    }
    else if (item2.innerHTML === 'X' && item5.innerHTML === 'X' && item8.innerHTML === 'X'){
        result.innerText = 'Sub-Zero Wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        subzeroSound.play();
        fightSound.pause();
    }
    else if (item1.innerHTML === 'X' && item4.innerHTML === 'X' && item7.innerHTML === 'X'){
        result.innerText = 'Sub-Zero Wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        subzeroSound.play();
        fightSound.pause();
    }
    else if (item3.innerHTML === 'X' && item5.innerHTML === 'X' && item7.innerHTML === 'X'){
        result.innerText = 'Sub-Zero Wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        subzeroSound.play();
        fightSound.pause();
    }
    else if (item1.innerHTML === 'X' && item5.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero Wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        subzeroSound.play();
        fightSound.pause();
    }

// give 8 winning possibilities to O
    else if (item1.innerHTML === 'O' && item2.innerHTML === 'O' && item3.innerHTML === 'O'){
        result.innerText = 'Scorpion Wins' 
     document.querySelector(".title").style.color="rgb(255, 68, 0)" 
     blocks.forEach((block) => block.removeEventListener('click', play));
     scorpionSound.play();
     fightSound.pause();
     
    }
    else if (item4.innerHTML === 'O' && item5.innerHTML === 'O' && item6.innerHTML === 'O'){
        result.innerText = 'Scorpion Wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        scorpionSound.play();
        fightSound.pause();
    }
    else if (item7.innerHTML === 'O' && item8.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion Wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        scorpionSound.play();
        fightSound.pause();
    }
    else if (item3.innerHTML === 'O' && item6.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion Wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        scorpionSound.play();
        fightSound.pause();
    }
    else if (item2.innerHTML === 'O' && item5.innerHTML === 'O' && item8.innerHTML === 'O'){
        result.innerText = 'Scorpion Wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        scorpionSound.play();
        fightSound.pause();
    }
    else if (item1.innerHTML === 'O' && item4.innerHTML === 'O' && item7.innerHTML === 'O'){
        result.innerText = 'Scorpion Wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        scorpionSound.play();
        fightSound.pause();
    }
    else if (item3.innerHTML === 'O' && item5.innerHTML === 'O' && item7.innerHTML === 'O'){
        result.innerText = 'Scorpion Wins' 
     document.querySelector(".title").style.color="rgb(255, 68, 0)" 
     blocks.forEach((block) => block.removeEventListener('click', play));
     scorpionSound.play();
     fightSound.pause();
    }
    else if (item1.innerHTML === 'O' && item5.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion Wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
        scorpionSound.play();
        fightSound.pause();
    }


    // if all the blocks are filled without matching one of the above 16 possibilities, write/insert "Draw"

    else if (item1.innerHTML !=='' && item2.innerHTML !=='' && item3.innerHTML !=='' &&
    item4.innerHTML !=='' && item5.innerHTML !=='' && item6.innerHTML !=='' && item7.innerHTML !==''
    && item8.innerHTML !=='' && item9.innerHTML !=='') {
        result.innerText = 'Draw'
}
}


// write a function to reset and clear the blocks input to start a new game and replay the background audio

function resetGame(){
    blocks.forEach(block => {
        block.innerText = ''
    })
    turnDisplay.innerHTML = '<span>X O</span> GAME'
    blocks.forEach(div => {
        div.addEventListener('click', play)
        fightSound.play();
        fightSound.currentTime=0;
    })
    playerOneTurn = true
 }
